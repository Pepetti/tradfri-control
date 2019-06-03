var io = require('socket.io')();
var coap = '~/libcoap/examples/coap-client';
let tradfri;

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
                break;

            case 'CONNECT':
                console.log(action);
                tradfri = require('node-tradfri-argon').create({
                    coapClientPath: coap,
                    securityId: action.payload.hubkey,
                    hubIpAddress: action.payload.hubip,
                    identity: action.payload.identity,
                });
                console.log(
                    'Created tradfri intance for user: ' +
                        action.payload.identity +
                        '...',
                );
                tradfri
                    .register()
                    .then(resp => {
                        console.log('Registering...');
                        console.log('Preshared Key: ' + resp.preshared_key);
                        tradfri.setPresharedKey(resp.preshared_key);
                        var obj = {
                            type: 'CONNECTED',
                            payload: {
                                connected: true,
                            },
                        };
                        console.log('Succesfully registered! Emitting...');
                        socket.emit('action', obj);
                    })
                    .catch(error => {
                        console.log(
                            'Error during registering: ' +
                                error +
                                ', emitting error...',
                        );
                        var obj = {
                            type: 'CONNECT_ERR',
                            payload: {
                                connected: false,
                            },
                        };
                        socket.emit('action', obj);
                        console.log('Error emitted...');
                    });
                break;

            default:
                null;
        }
    });
});

io.listen(port);
console.log('Listening on port: ' + port);
