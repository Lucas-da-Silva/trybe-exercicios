const fs = require('fs').promises;
const { join } = require('path');

const readCacauTrybeFile = async () => {
  const path = '/files/cacauTrybeFile.json';
  try {
    const contentFile = await fs.readFile(join(__dirname, path), 'utf-8');
    return JSON.parse(contentFile);
  } catch (error) {
    return null;
  }
};

const writeCacauTrybeFile = async (chocolates) => {
  const path = '/files/cacauTrybeFile.json';
  const strChocolates = JSON.stringify(chocolates);
  try {
    await fs.writeFile(join(__dirname, path), strChocolates);
  } catch (error) {
    console.log(error);
  }
};

const getAllChocolates = async () => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates;
};

const getChocolateById = async (id) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates.find((chocolate) => chocolate.id === id);
};

const getChocolatesByBrand = async (brandId) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates.filter(
    (chocolate) => chocolate.brandId === brandId
  );
};

const updateChocolateId = async (id, name, brandId) => {
  const { chocolates } = await readCacauTrybeFile();
  const chocolateIndex = chocolates.findIndex(
    (chocolate) => chocolate.id === id
  );
  const chocolate = { id, name, brandId };

  if (chocolateIndex === -1) return { message: 'chocolate not found' };

  chocolates[chocolateIndex] = chocolate;
  await writeCacauTrybeFile(chocolates);
  return { chocolate: chocolate };
};

module.exports = {
  getAllChocolates,
  getChocolateById,
  getChocolatesByBrand,
  updateChocolateId,
};
