const express = require('express')
const app = express()

app.use(express.json())
//配置中间件
app.use(express.urlencoded({extended:false}))

//解决跨域问题，一定写在路由之前
const cors = require('cors')
app.use(cors())

const router = require('./apiRouter')

app.use('/api',router)

app.listen(80,() => {
    console.log('running at http://127.0.0.1');
})