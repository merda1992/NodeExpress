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
    res.status(200)
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

app.get('/about', (req, res) => {
    res.status(200)
    res.sendFile(path.join(__dirname, 'views', 'about.html'))
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})