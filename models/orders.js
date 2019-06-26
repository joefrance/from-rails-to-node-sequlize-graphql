/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const Order = sequelize.define('Order', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    order_number: {
      type: DataTypes.STRING,
      allowNull: true
    },
    invoice_number: {
      type: DataTypes.STRING,
      allowNull: true
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    customer_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'customers',
        key: 'id'
      }
    }
  }, {
    tableName: 'orders'
  });


  Order.associate = models => {
    Order.belongsTo(models.Customer, {
      as: "Customer",
      foreignKey: "id"
    });
  };

  return Order;
};
