export default `
  type Customer {
    id: ID!
    name: String!
    phone: String!
    orders: [Order!]!
  }

  type Order {
    id: ID!
    order_number: String
    invoice_number: String!
    customer_id: ID!
    customer: Customer!
  }

  type Query {
    orders: [Order!]!
    order(id: ID!): Order
    customer(id: ID!): Customer
    customer: [Customer!]!
  }

  type Mutation {
    createOrder(order_number: String, invoice_number:String!, customer_id: ID!): Order!
    updateOrder(id: ID!, order_number: String, invoice_number:String!): [Int!]!
    deleteOrder(id: ID!): Int!
  }
`;