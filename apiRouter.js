const express = require('express')
const router = express.Router()
const fs = require('fs')

//读出Json文件
router.get('/get', (req, res) => {
    fs.readFile("testData.json", (err, data) => {
        if (err) throw err
        let navData = JSON.parse(data)
        res.send({
            status: 0,
            msg: 'GET请求成功',
            data: navData
        })
    })
})

router.post('/getNewJson', (req, res) => {
    console.log('成功获取前端修改')
    console.log(req.body)
    res.end('成功获取修改')
    //把收到的新数据写入testData.json
    fs.writeFile("testData.json", JSON.stringify(req.body, null, 2), (error) => {
        if (error) {
          console.log('An error has occurred ', error);
          return;
        }
        console.log('Data written successfully to testData.json');
      });
})

router.post('/post', (req, res) => {
    const body = req.body
    res.send({
        status: 0,
        msg: 'POST请求成功',
        data: body
    })
})

module.exports = router