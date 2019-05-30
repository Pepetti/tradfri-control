var io = require('socket.io')();

var coap = '~/libcoap/examples/coap-client';
let tradfri = require('node-tradfri-argon').create({
    coapClientPath: coap,
    securityId: 'nan',
    hubIpAddress: 'nan',
    identity: 'nan',
});

const port = 8000;

io.on('connection', socket => {
    console.log('User connected...');

    socket.on('disconnect', function() {
        console.log('User disconnected...');
    });

    socket.on('register', function(reginfo) {
        console.log('Received register request with reqinfo: ' + reginfo.key);
        tradfri = require('node-tradfri-argon').create({
            coapClientPath: coap,
            securityId: reginfo.key,
            hubIpAddress: reginfo.ip,
            identity: 'test1',
            preshared_key: '3sKGzY9sOtfjuhcs',
        });
        console.log('Created tradfri instance, registering...');
        tradfri
            .register()
            .then(resp => {
                tradfri.setPresharedKey(resp.preshared_key);
                console.log('Preshared key:' + resp.preshared_key);
            })
            .catch(error => {
                console.log(error);
            });
        console.log('Registered...');
    });

    socket.on('devices', () => {
        tradfri
            .getDevices()
            .then(devices => {
                devices.forEach(device => {
                    console.log(device);
                });
            })
            .catch(error => {
                console.log(error);
            });
    });

    socket.on('groups', () => {
        tradfri.getAll().then(resp => {
            console.log(resp);
        });
    });
});

io.listen(port);
console.log('Listening on port: ' + port + '...');
