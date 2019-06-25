const db = require("./models");
const faker = require("faker");
const times = require("lodash.times");
const random = require("lodash.random");

db.sequelize.sync().then(() => {
  // populate author table with dummy data
  db.Customer.bulkCreate(
    times(10, () => ({
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      address: faker.address.streetAddress(),
      address_2: faker.address.streetName(),
      city: faker.address.city(),
      state: faker.address.stateAbbr(),
      zip: faker.address.zipCode(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber()
    }))
  );
  // populate post table with dummy data
  db.Order.bulkCreate(
    times(10, () => ({
        order_number: faker.lorem.sentence(),
        invoice_number: faker.lorem.sentence(),
        customer_id: random(1, 10)
    }))
  );

});
