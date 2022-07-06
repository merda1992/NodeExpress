const {Router} = require('express')
const Course = require('../models/courses')
const router = Router()

router.get('/', (req, res) => {
    res.render('add', {
        title: 'Добавит курс',
        isAdd: true
    })
})

router.post('/', async (req, res) => {
    const course = new Course(req.body.title, req.body.price, req.body.img)

    await course.save()

    //функционал что не зависало прилодение
    // добавим редирект(переадресацию)
    res.redirect('/courses')
})

module.exports = router
