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

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/about', (req, res) => {
    res.render('about')
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})