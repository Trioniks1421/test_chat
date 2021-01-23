const { Router } = require('express');
const router = Router();
const User = require('../models/user')
router.get('/', (req, res) => {
    res.render('home', {
        title: 'Чат'
    })
})
router.post('/', async (req, res) => {
    const user = new User({
        username: req.body.username,
        created_at: new Date()
    })
    await user.save()
    res.redirect('/')
})

module.exports = router;