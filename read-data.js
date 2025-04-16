const { sequelize, Weather } = require('./db');

async function readData() {
  try {
    const data = await Weather.findAll();
    console.log('📋 Dữ liệu hiện có:');
    data.forEach(row => {
      console.log(`🌍 ${row.location} | 🌡️ ${row.temperature} | 🤒 RealFeel: ${row.realfeel} | 📖 ${row.status}`);
    });
  } catch (err) {
    console.error('❌ Lỗi khi đọc dữ liệu:', err);
  } finally {
    await sequelize.close();
  }
}

readData();