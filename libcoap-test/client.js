var io = require('socket.io-client');

const socket = io.connect('http://localhost:8000');

var reginfo = {
    key: '4uWhn54BblFBcnFN',
    ip: '192.168.1.112',
};

socket.emit('register', reginfo);
socket.emit('devices');
//Group getting doesn't work properly
//socket.emit('groups');
