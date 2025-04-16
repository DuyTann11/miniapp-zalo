const express = require('express');
const fs = require('fs');
const path = require('path');
const { Sequelize, DataTypes } = require('sequelize');

const app = express();
const PORT = 3000;

// ✅ Cho phép phục vụ file tĩnh trong thư mục public/
app.use(express.static(path.join(__dirname, 'public')));

// Cấu hình Sequelize
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'weather.db'
});

const Weather = sequelize.define('Weather', {
  location: DataTypes.STRING,
  status: DataTypes.STRING,
  temperature: DataTypes.STRING,
  realfeel: DataTypes.STRING
});

// Trả HTML với dữ liệu thay thế
app.get('/', async (req, res) => {
  const weather = await Weather.findOne({ order: [['createdAt', 'DESC']] });
  fs.readFile('index.html', 'utf8', (err, html) => {
    if (err) return res.status(500).send('Không đọc được file');

    // Thay {{...}} bằng dữ liệu thật
    html = html
      .replace('{{location}}', weather?.location || '')
      .replace('{{status}}', weather?.status || '')
      .replace('{{temperature}}', weather?.temperature || '')
      .replace('{{realfeel}}', weather?.realfeel || '');

    res.send(html);
  });
});

app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});