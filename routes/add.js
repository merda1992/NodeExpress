const {Router} = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.render('add', {
        title: 'Добавит курс',
        isAdd: true
    })
})

router.post('/', (req, res) => {
    console.log(req.body)

    //функционал что не зависало прилодение
    // добавим редирект(переадресацию)
    res.redirect('/courses')
})

module.exports = router
