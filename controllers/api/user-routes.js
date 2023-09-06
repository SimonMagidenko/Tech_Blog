const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const UserData = await User.findAll({
            attributes: { exclude: ['password'] }
        });

        res.json(UserData);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const UserData = await User.findOne({
            attributes: { exclude: ['password'] },
            where: {
                id: req.params.id
            },
            include: [
                {
                    model: Post,
                    attributes: [
                        'id',
                        'title',
                        'content',
                        'created_at'
                    ]
                },
                {
                    model: Comment,
                    attributes: ['id', 'comment_input', 'created_at'],
                    include: {
                        model: Post,
                        attributes: ['title']
                    }
                },
                {
                    model: Post,
                    attributes: ['title'],
                }
            ]
        });

        if (!UserData) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
        }

        res.json(UserData);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const UserData = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });

        req.session.save(() => {
            req.session.user_id = UserData.id;
            req.session.username = UserData.username;
            req.session.loggedIn = true;

            res.json(UserData);
        });
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

router.post('/login', async (req, res) => {
    try {
        const UserData = await User.findOne({
            where: {
                username: req.body.username
            }
        });

        if (!UserData) {
            res.status(400).json({ message: 'No user with that username!' });
            return;
        }

        const validPassword = UserData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect password!' });
            return;
        }

        req.session.save(() => {
            req.session.user_id = UserData.id;
            req.session.username = UserData.username;
            req.session.loggedIn = true;
            res.json({ user: UserData, message: 'You are now logged in!' });
        });
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

router.post('/logout', async (req, res) => {
    try {
        if (req.session.loggedIn) {
            req.session.destroy(() => {
                res.status(204).end();
            });
        } else {
            res.status(404).end();
        }
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const UserData = await User.update(req.body, {
            individualHooks: true,
            where: {
                id: req.params.id
            }
        });

        if (!UserData[0]) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
        }

        res.json(UserData);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const UserData = await User.destroy({
            where: {
                id: req.params.id
            }
        });

        if (!UserData) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
        }

        res.json(UserData);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

module.exports = router;