const express = require('express');
const path = require('path');
const exphs = require('express-handlebars');
const { extname } = require('path');
//экспорт роутов
const homerRoutes = require('./routes/home')
const addRoutes = require('./routes/add')
const coursesRoutes = require('./routes/courses')

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

//Добавим Зарегестрированые роуты
app.use(homerRoutes)
app.use(addRoutes)
app.use(coursesRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})