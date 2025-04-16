const fs = require('fs');
const path = require('path');

const sourcePath = path.join(__dirname, 'app-config.json');
const destinationPath = path.join(__dirname, 'www', 'app-config.json');

fs.copyFile(sourcePath, destinationPath, (err) => {
  if (err) {
    console.error('Error copying file:', err);
  } else {
    console.log('Successfully copied app-config.json to www/');
  }
});
