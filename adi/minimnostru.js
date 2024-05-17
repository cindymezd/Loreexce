const fs = require('fs').promises;

async function readData() {
  try {
    const data = await fs.readFile('file.txt', 'utf8');
    console.log(data);
  } catch (error) {
    console.error('Error reading file:', error);
  }
}

readData();
