const express = require('express')
const port = process.env.PORT || 5000
const app = express();


app.get('/', (req, res) => {
    res.send('Hello server-api!')
})

app.listen(port, err => {
    if (err) {
        console.log('Error', err)
    } else {
        console.log(`Listening on port ${port}`)
    }
})