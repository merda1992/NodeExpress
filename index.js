const express = require('express');
const path = require('path');
const exphs = require('express-handlebars');
const { extname } = require('path');

const app = express();

//настройка хэндлбарс
const hbs = exphs.create({
    defaultLayout: 'main',
    extname: 'hbs'

})

//движок для рендеринга хтмла страниц
app.engine('hbs', hbs.engine)
//используем этот движок
app.set('view engine', 'hbs')
//хранение шаблонов
app.set('views', 'views')

//зарегестрируем папку паблик как публичную
app.use(express.static('public'))

app.get('/', (req, res) => {
    //2ым параметром принимает обьект
    res.render('index', {
        title: 'Главная страница',
        isHome: true
    })
})

//Добавим роуты
app.get('/add', (req, res) => {
    res.render('add', {
        title: 'Добавит курс',
        isAdd: true
    })
})

app.get('/courses', (req, res) => {
    res.render('courses', {
        title: 'Курсы',
        isCourses: true
    })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})