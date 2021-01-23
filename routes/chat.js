const { Router } = require('express');
const router = Router()


router.get('/', (req, res) => {
    res.render('chat', {
        title: 'Чат'
    })
})



module.exports = router