const axios = require('axios');
const CodeReview = require('../models/CodeReview');

exports.reviewCode = async (req, res) => {
    try {
        const { code } = req.body;
        if (!code) {
            return res.status(400).json({ error: 'Code snippet is required for review.' });
        }

        const savedCode = await CodeReview.create({
            userId: req.user.id,
            code: code,
            review: null, 
        });

        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: 'gpt-4',
                messages: [
                    {
                        role: 'system',
                        content:
                            "You are an expert code reviewer. Provide structured feedback with three sections separated by blank lines: " +
                            "Issue Found:\n- Line: Specify the exact line of code with the issue.\n- Problem: Provide a one-sentence description of the issue.\n\n" +
                            "Suggested Fix:\n- Show only the corrected code snippet.\n\n" +
                            "Best Practices:\n- Provide a single, concise best practice relevant to the issue."
                    },
                    {
                        role: 'user',
                        content: `Analyze the following code and provide improvements:\n\n${code}`
                    }
                ],
                max_tokens: 500,
                temperature: 0.5,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
                },
            }
        );

        const review = response.data.choices[0].message.content.trim();

        savedCode.review = review;
        await savedCode.save();

        res.json({ review });
    } catch (error) {
        console.error('Error reviewing code:', error.message);
        res.status(500).json({ error: 'Failed to review code' });
    }
};

exports.getReviewHistory = async (req, res) => {
    try {
        const reviews = await CodeReview.findAll({ where: { userId: req.user.id } });
        res.json({ reviewHistory: reviews });
    } catch (error) {
        console.error('Error fetching review history:', error.message);
        res.status(500).json({ error: 'An error occurred while fetching review history' });
    }
};