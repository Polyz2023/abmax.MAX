const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
  }); 
const path=require('path');
const cors = require('cors'); // Импорт модуля cors

app.use(cors());
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/root/modules/2024max/css/mxcss/version/1.0.1/online', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'MXCSS', 'mxcss.css'));
});

app.get('/root/modules/2024max/js/mxjs/version/1.0.0/online', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'MXJS', 'mxjs.js'));
});

// Переместите обработчик маршрута '*' в конец
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });
  
  server.listen(8411, () => {
    console.log("Server is running on port 1488");
});

var connections = [];
var online=0; 
io.on('connection', (socket) => {
    connections.push(socket);
    online ++;
    console.log("on" + online);
    
    io.sockets.emit('onlines', online);

    socket.on('disconnect', (data) => {
        connections.splice(connections.indexOf(socket), 1);
        online --;
        console.log("Off" + online);
        io.sockets.emit('onlines', online); 
    });
});