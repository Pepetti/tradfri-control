var io = require('socket.io')();
var tradfri = require('node-tradfri-argon');

const d = new Date();

const port = 8000;

io.origins([
    'http://localhost:3000',
    'http://localhost:5000',
    'http://192.168.1.81:3000',
    'http://192.168.1.81:5000',
]);

io.on('connection', socket => {
    console.log('User connected');

    socket.on('action', function(action) {
        console.log('Received request: ' + action.type + '...');

        switch (action.type) {
            case 'LOGIN_ATTEMPT':
                console.log(action);
                var obj = {
                    type: 'LOGIN',
                    payload: {
                        loggedin: true,
                        user: {
                            userName: action.payload,
                            loggedinAt: d.getTime(),
                            loggedoutAt: null,
                        },
                    },
                };
                socket.emit('action', obj);
                console.log(
                    'Login success for user: ' + action.payload + '...',
                );
        }
    });
});

io.listen(port);
console.log('Listening on port: ' + port);
