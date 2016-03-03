const Hapi = require('hapi');
const Good = require('good');
const inert = require('inert');

const server = new Hapi.Server();
server.connection({ port: 3000 });

server.register([
  {
    register: Good,
    options: {
      reporters: [{
        reporter: require('good-console'),
        events: {
          response: '*',
          log: '*'
        }
      }]
    }
  },{
    register: inert
  }], (err) => {

  if (err) {
    throw err; // something bad happened loading the plugin
  }

  server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
      reply('Hello, world!');
    }
  });

  server.route({
    method: 'GET',
    path: '/{name}',
    handler: function (request, reply) {
      reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
    }
  });

  server.route({
    method: 'GET',
    path: '/hello',
    handler: function (request, reply) {
      reply.file('./views/index.html');
    }
  });

  server.start((err) => {
    if (err) {
       throw err;
    }
    server.log('info', 'Server running at: ' + server.info.uri);
  });
});
