'use strict'

const Hapi = require('hapi'); 

const server = Hapi.server({
    host: "localhost",
    port: 3001
});

server.route({
    method: 'GET',
    path:'/toys',
    handler: (request, h) => {
        return { toys:[{
            make: "Disney",
            model: "Toy Story",
            year: '1996'

        },{
            make: "harbor",
            model: "trainset",
            year: 'NA'
            }] 
        }
    },
    config: {
        cors: {
            origin: ['*'],
            additionalHeaders: ['cache-control', 'x-requested-with']
        }
    }
});

server.route({
    method: 'POST',
    path: '/toys',
    handler: (request, h) => {
        console.log(request.payload)
        return h.response() 
    },
    config: {
        cors: {
            origin: ['*'],
            additionalHeaders: ['cache-control', 'x-requested-with']
        }
    }
})


async function start() {
    try {
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
};

start();