const { Router } = require('express')
const router = Router();
const User = require('../models/user')

router.get('/check', (req, res) => {
    res.render('checkUser', {
        title: 'Аутентификация'
    })
})

router.get('/add', (req, res) => {
    res.render('authUser', {
        title: 'Авторизация',

    })
})

router.post('/add', async (req, res) => {
    const user = new User({
        username: req.body.username,
        created_at: Date()
    })
    await user.save()
    res.redirect('/')

})

router.post('/check', async (req, res) => {
    const user = await User.findOne({ username: req.body.username }).lean()
    if (user) {
        res.redirect(`/chat?username=${user.username}`)
    }
})



module.exports = router