const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {
        const CommentData = await Comment.findAll();
        res.json(CommentData);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const CommentData = await Comment.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(CommentData);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

router.post('/', withAuth, async (req, res) => {
    try {
        if (req.session) {
            const CommentData = await Comment.create({
                comment_text: req.body.comment_input,
                post_id: req.body.post_id,
                user_id: req.session.user_id,
            });
            res.json(CommentData);
        }
    } catch (err) {
        console.error(err);
        res.status(400).json(err);
    }
});

router.put('/:id', withAuth, async (req, res) => {
    try {
        const CommentData = await Comment.update(
            {
                comment_text: req.body.comment_input
            },
            {
                where: {
                    id: req.params.id
                }
            }
        );
        if (!CommentData || CommentData[0] === 0) {
            res.status(404).json({ message: 'No comment found with this id' });
            return;
        }

        res.json({ message: 'Comment updated successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const CommentData = await Comment.destroy({
            where: {
                id: req.params.id
            }
        });

        if (CommentData) {
            res.json({ message: 'Comment deleted successfully' });
        } else {
            res.status(404).json({ message: 'No comment found with this id' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

module.exports = router;