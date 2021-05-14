const express = require('express')
const app = express()
const port = 3001


app.get('/cookieTest', (req, res) => {
    res.send({receivedCookie: req.headers.cookie});
})

app.listen(port, () => {
    console.log(`API Gateway demo app listening at http://localhost:${port}`)
})