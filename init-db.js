const { sequelize, Weather } = require('./db');

async function init() {
  try {
    // Tạo bảng nếu chưa có
    await sequelize.sync({ force: true }); // force: true sẽ xóa và tạo lại bảng
    console.log('✅ Đã tạo xong database và bảng weather!');

    // Thêm dữ liệu mẫu nếu muốn
    await Weather.create({
      location: 'Quận 1, VN',
      temperature: '88°F',
      realfeel: '95°F',
      status: 'Đôi lúc có mưa và mưa giông',
    });

  } catch (err) {
    console.error('❌ Lỗi khi tạo database:', err);
  } finally {
    await sequelize.close();
  }
}

init();