const fs = require('fs').promises;
const { resolve } = require('path');

const path = resolve(__dirname, '../models/data/users.json');

const readFile = async () => {
  const users = await fs.readFile(path, 'utf-8');
  return JSON.parse(users);
};

const writeFile = async (data) => {
  await fs.writeFile(path, JSON.stringify(data));
};

module.exports = {
  readFile,
  writeFile,
};