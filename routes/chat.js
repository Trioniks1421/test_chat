const { Router } = require('express');
const router = Router()
const User = require('../models/user')

router.get('/:id', async(req, res) => {
    const user = req.params.id
    console.log(user)
    res.render('chat', {
        title: 'Чат',
    })
})



module.exports = router