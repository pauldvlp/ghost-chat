const http = require('http')
const { Server } = require('socket.io')
const crypto = require('crypto')
const fs = require('fs')
const path = require('path')

const PORT = process.env.PORT || 3000
const IO_OPTIONS = { cors: { origin: '*' } }

const server = http.createServer((req, res) => {
  const { url, method } = req

  if (method === 'GET') {
    try {
      const indexFilePathName = path.join(__dirname, 'dist/index.html')
      const filePathName = path.join(__dirname, 'dist/', url)
      const fileExt = path.extname(filePathName).slice(1)

      if (['/index.html', '/', '/login', '/chat'].includes(url)) {
        const indexFile = fs.readFileSync(indexFilePathName, 'utf-8')
        res.writeHead(200, { 'Content-Type': getContentType('html') })
        res.end(indexFile)
      } else if (url.startsWith('/assets/')) {
        fs.readFile(filePathName, (err, data) => {
          if (err) {
            res.writeHead(404, { 'Content-Type': getContentType('txt') })
            res.end('File Not Found')
          }

          res.writeHead(200, { 'Content-Type': getContentType(fileExt) })
          res.end(data)
        })
      }
    } catch (error) {
      console.log(error.message)
    }
  }
})
const io = new Server(server, IO_OPTIONS)

let users = []

io.on('connection', (socket) => {
  socket.on('has-session', ({ username }) => {
    const existUser = users.some((user) => user.username === username)

    if (!existUser) socket.emit('non-existent-session')
  })

  socket.on('login', ({ username }) => {
    if (username === '') {
      socket.emit('login-error', {
        message: 'The username must not be empty.'
      })
      return
    }

    if (username.length <= 3) {
      socket.emit('login-error', {
        message: 'The user name must be at least 4 characters long.'
      })
      return
    }

    const existUser = users.some((user) => user.username === username)

    if (existUser) {
      socket.emit('login-error', {
        message: `The user ${username} already exists.`
      })
      return
    }

    users.push({ username })
    socket.emit('login-success', { username })
    io.emit('user-connected', { username })
  })

  socket.on('logout', ({ username }) => {
    users = [...users.filter((user) => user.username !== username)]
    socket.emit('logout-success', { username })
    io.emit('user-disconnected', { username })
  })

  socket.on('send-message', (message) => {
    io.emit('new-message', { ...message, id: crypto.randomUUID() })
  })

  socket.on('total-users', () => {
    socket.emit('total-users', { totalUsers: users.length })
  })
})

server.listen(PORT, () => {
  console.log('Server running on http://localhost:3000')
})

function getContentType (ext) {
  const contentTypes = {
    js: 'text/javascript',
    html: 'text/html',
    css: 'text/css',
    txt: 'text/plain',
    svg: 'image/svg+xml',
    mp3: 'audio/mpeg',
    png: 'image/png',
    ico: 'image/x-icon'
  }

  return contentTypes[ext]
}
