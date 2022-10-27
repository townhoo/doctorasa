const express = require('express')
const path = require('path')
const router = require('./route/router')
const app = express()


app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')
app.use(express.static(path.join(__dirname,'public')))
app.use(router)

app.listen(8080, ()=>{
    console.log('start server');
})
