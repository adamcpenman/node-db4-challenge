const server = require('./server')
// const db = require()

const port = process.env.PORT || 4000

server.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})

server.get("/", (req, res) => {
    res.send("<h2>NODE-DB4-Challenge")
})