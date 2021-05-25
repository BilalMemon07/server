const express = require('express');
const app = express();
const port = 3000



app.get('/', (req, res) => {
    res.send('"Hellow i will come  $ Home Page$"')
})
app.get('/about', (req, res) => {
    res.send('"Hellow i will come  $ About Page$"')
})

app.listen(port, () => {
    console.log(`server is running ${port}`)
})

