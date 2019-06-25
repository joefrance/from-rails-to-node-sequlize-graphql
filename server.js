import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import faker from "faker";
import times from "lodash.times";
import random from "lodash.random";
import typeDefs from "./schema";
import resolvers from "./resolvers";
import db from "./models";

const server = new ApolloServer({
  typeDefs: gql(typeDefs),
  resolvers,
  context: { db }
});

const app = express();
server.applyMiddleware({ app });

app.use(express.static("app/public"));

db.sequelize.sync().then(() => {
  // populate author table with dummy data
  db.customer.bulkCreate(
    times(10, () => ({
      name: faker.name.firstName()
    }))
  );
  // populate post table with dummy data
  db.invoice.bulkCreate(
    times(10, () => ({
        order_number: faker.lorem.sentence(),
        invoice_number: faker.lorem.sentence(),
        customer_id: random(1, 10)
    }))
  );

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
});