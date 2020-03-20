const { UserInputError, PubSub } = require('apollo-server');

const Example = require('./models/example');

const pubsub = new PubSub();

const resolvers = {
  Query: {
    example: () => {
      return Example.find({});
    }
  },
  Mutation: {
    createExample: async (root, args) => {
      let example = new Example({
        field1: args.field1,
        field2: args.field2
      });
      await example.save().catch(error => {
        throw new UserInputError(error.message, {
          invalidArgs: args
        });
      });

      pubsub.publish('EXAMPLE_ADDED', {
        exampleAdded: example
      });

      return example;
    }
  },
  Subscription: {
    exampleAdded: {
      subscribe: () => pubsub.asyncIterator(['EXAMPLE_ADDED'])
    }
  }
};

module.exports = resolvers;
