const { Sequelize, DataTypes } = require('sequelize');

// Kết nối đến database SQLite (file sẽ được tạo tự động)
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './weather.db',
});

// Định nghĩa model Weather
const Weather = sequelize.define('Weather', {
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  temperature: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  realfeel: {
    type: DataTypes.STRING,
  },
  status: {
    type: DataTypes.STRING,
  },
}, {
  tableName: 'weather',
  timestamps: true, // tự động tạo createdAt, updatedAt
});

// Xuất cả 2 biến ra ngoài dùng
module.exports = { sequelize, Weather };