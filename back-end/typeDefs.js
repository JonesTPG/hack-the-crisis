const { gql } = require('apollo-server');

const typeDefs = gql`
  type Example {
    field1: String!
    field2: String
  }

  type Query {
    example: [Example]
  }

  type Mutation {
    createExample(field1: String!, field2: String): Example
  }

  type Subscription {
    exampleAdded: Example!
  }
`;

module.exports = typeDefs;
