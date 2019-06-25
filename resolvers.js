export default {
    Customer: {
      orders: (parent, args, context, info) => parent.getOrders(),
    },
    Order: {
      customer: (parent, args, context, info) => parent.getCustomer(),
    },
    Query: {
      orders: (parent, args, { db }, info) => db.order.findAll(),
      customers: (parent, args, { db }, info) => db.customer.findAll(),
      order: (parent, { id }, { db }, info) => db.order.findById(id),
      customer: (parent, { id }, { db }, info) => db.customer.findById(id) 
    },
    Mutation: {
      createOrder: (parent, { order_number, invoice_number, customer_id }, { db }, info) =>
        db.order.create({
            order_number: order_number,
            invoice_number: invoice_number,
            customer_id: customer_id
        }),
      updateOrder: (parent, { order_number, invoice_number, customer_id, id }, { db }, info) =>
        db.order.update({
            order_number: order_number,
            invoice_number: invoice_number,
            customer_id: customer_id
        },
        {
          where: {
            id: id
          }
        }),
      deleteOrder: (parent, {id}, { db }, info) =>
        db.order.destroy({
          where: {
            id: id
          }
        })
    }
  };