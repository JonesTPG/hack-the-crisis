require('dotenv').config();

let PORT = process.env.PORT || 4000;
let SSL_PORT = process.env.SSL_PORT || 4001;
let MONGODB_URI = process.env.MONGODB_URI;
let MONGODB_TEST_URI = process.env.MONGODB_TEST_URI;
let GRAPHQL_ENDPOINT =
  process.env.GRAPHQL_ENDPOINT || 'http://localhost:4000/graphql';
let GRAPHQL_SUBSCRIPTION_ENDPOINT =
  process.env.GRAPHQL_SUBSCRIPTION_ENDPOINT ||
  'ws://localhost:4000/subscriptions';

module.exports = {
  MONGODB_URI,
  MONGODB_TEST_URI,
  PORT,
  SSL_PORT,
  GRAPHQL_ENDPOINT,
  GRAPHQL_SUBSCRIPTION_ENDPOINT
};
