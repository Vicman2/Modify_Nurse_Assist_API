require("dotenv").config()
const server = require("./server")
const http = require("http").createServer(server)

const PORT = process.env.SERVER_PORT || 3000
const HOST = process.env.SERVER_HOST || 'localhost'

http.listen(PORT, HOST, () => console.log(`Server running on http://${HOST}:${PORT}`))