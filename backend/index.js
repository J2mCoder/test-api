const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

var corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200
}

app.post('/api', (req, res) => {
    res.json({ "user": req.body })
})

app.options('*', cors(corsOptions))
app.get('/api', (req, res) => {
    res.json({ "user": ["user1", "user2", "user3"] })
})


const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))