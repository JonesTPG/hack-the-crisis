const { gql } = require('apollo-server');

const typeDefs = gql`
  type Order {
    name: String!
    phone: String!
    where: String
    whereCoords: [Int]
    when: String
    whenOrdered: String
    what: String
  }
  type Provider {
    name: String!
    phone: String!
    email: String
    password: String
  }

  type Query {
    orders: [Order]
  }

  type Mutation {
    createOrder(
      name: String
      phone: String
      where: String
      what: String
      when: String
    ): Order
    createProvider(
      name: String
      phone: String
      email: String
      password: String
    ): Provider
  }

  type Subscription {
    orderAdded: Order!
  }
`;

module.exports = typeDefs;
