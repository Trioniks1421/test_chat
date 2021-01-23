const express = require('express');
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');
const path = require('path')
const homeRoutes = require('./routes/home')
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use('/', homeRoutes)

async function start() {
    try {
        const MONGO_URL = "mongodb+srv://svyatoslav:bayron1421@svg.spi1e.mongodb.net/test_soft?retryWrites=true&w=majority"
        await mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
       io.on('connection',(socket)=>{
           console.log('a user connected')
       })
        const PORT = 9000;
        server.listen(PORT, () => {
            console.log(`Server listen on port : ${PORT}`)
        })

    } catch (e) {
        console.log(e)
    }
}
start()