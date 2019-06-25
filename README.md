# from-rails-to-node-sequlize-graphql
Moving from Rails to Node is fairly straight forward. Both ecosystems are mature. But one feature I really enjoyed in Rails was DB migrations. I found two contenders: Prisma and Sequelize. I found Prisma a bit top-heavy for my needs. Sequelize seems to be right-sized for my current projects.

# Based on "Setup a GraphQL API with Apollo 2.0 Sequelize and Express.js"

https://medium.com/infocentric/setup-a-graphql-api-with-apollo-2-0-sequelize-and-express-js-608d1365d776

# This example is uses Docker and was made on a Mac (Windows mileage may vary)

https://docs.docker.com/docker-for-mac/install/

# Step-by-step

We're using yarn (https://yarnpkg.com/lang/en/docs/install/#mac-stable)

yarn init --yes

yarn add body-parser express pg sequelize apollo-server-express apollo-boost graphql-tag graphql

yarn add --dev nodemon sequelize-cli babel-cli babel-preset-env babel-preset-stage-3 webpack webpack-cli faker lodash.times lodash.random

yarn run sequelize-skeleton

update config/config.json

