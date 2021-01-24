
const { Router } = require('express');
const router = Router()
const User = require('../models/user')

router.get('/', async (req, res) => {
    const user = await User.findOne({ username: req.query.username }).lean()
    console.log(user._id)
    console.log('----',msg)
    res.render('chat', {
        title: 'Чат',

    })
    
})
router.post('/', async (req, res) => {

    console.log('--------')
})



module.exports = router