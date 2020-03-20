const http = require('http');
const app = require('./app');
const { SubscriptionServer } = require('subscriptions-transport-ws');
const { execute, subscribe } = require('graphql');

const schema = require('./schema');
const config = require('./utils/config');

const webServer = http.createServer(app);

webServer.listen({ port: config.PORT }, () => {
  console.log('Server ready at localhost:4000');
  new SubscriptionServer(
    {
      execute,
      subscribe,
      schema: schema
    },
    {
      server: webServer,
      path: '/subscriptions'
    }
  );
});
