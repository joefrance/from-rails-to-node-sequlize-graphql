/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const Customer =  sequelize.define('Customer', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true
    },
    address_2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true
    },
    state: {
      type: DataTypes.STRING,
      allowNull: true
    },
    zip: {
      type: DataTypes.STRING,
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'customers'
  });

  Customer.associate = models => {
    Customer.hasMany(models.Order, {
      as: "Orders",
      foreignKey: "customer_id"
    });
  };

  return Customer;
};
