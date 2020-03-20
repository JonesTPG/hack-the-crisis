const { UserInputError, PubSub } = require('apollo-server');
const bcrypt = require('bcryptjs');

const Order = require('./models/order');
const Provider = require('./models/provider');

const pubsub = new PubSub();

const resolvers = {
  Query: {
    orders: () => {
      return Order.find({});
    }
  },
  Mutation: {
    createOrder: async (root, args) => {
      let order = new Order({
        name: args.name,
        phone: args.phone,
        where: args.where,
        when: args.when,
        what: args.what
      });
      await order.save().catch(error => {
        throw new UserInputError(error.message, {
          invalidArgs: args
        });
      });
      pubsub.publish('NEW_ORDER', {
        addedOrder: order
      });

      return order;
    },
    createProvider: async (root, args) => {
      let password = args.password;
      if (args.password == undefined) {
        console.log('no password');
        return;
      }

      const saltRounds = 10;
      const passwordHash = await bcrypt.hash(password, saltRounds);

      let provider = new Provider({
        name: args.name,
        phone: args.phone,
        email: args.email,
        password: args.password,
        passwordHash: passwordHash
      });

      await provider.save().catch(error => {
        throw new UserInputError(error.message, {
          invalidArgs: args
        });
      });

      return provider;
    }
  },
  Subscription: {
    orderAdded: {
      subscribe: () => pubsub.asyncIterator(['NEW_ORDER'])
    }
  }
};

module.exports = resolvers;
