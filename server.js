const express = require('express')
const app = express()
const http = require('http')
const socketIO = require('socket.io')
const PORT = 8080

const server = http.createServer(app)
const io = socketIO(server, cors: {
    origin: "https://chat-client-khaki.vercel.app",
    methods: ["GET", "POST"],
    credentials: true
  })

app.get('/', (req, res) => {
    res.send('this is home route')
})

io.on('connection', (socket) => {
    console.log(`${socket.id} connected`)

    socket.on('joined', ({socketid})=>{
        console.log(`${socketid} joined`)
    })

    socket.on('sentmsg', ({id, message}) => {
        io.emit('recievedmsg', {id, message})
    })

    socket.on('dissconnect', ()=>{
        console.log('user left')
    })

    socket.on('joinroom', ({room}) => {
        console.log(room)
        socket.join(room)
    })

    socket.on('sendmsgtoroom', ({id, message}) => {
        console.log(message)
        io.to('testroom').emit('recieveroommsg', {id, message})
    })
})


server.listen(PORT, () => console.log(`server live on port ${PORT}`))