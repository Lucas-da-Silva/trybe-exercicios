const {
  formatError,
  getToken,
  fsFunctions: { readFile, writeFile },
} = require('../utils');

const getAdmin = () => Math.floor(Math.random() * 100) > 50;

module.exports = async (req, res) => {
  const { username, password } = req.body;
  const users = await readFile();

  if (users.some((user) => user.username === username)) {
    return res.status(409).json(formatError('user already exists'));
  }

  const admin = getAdmin();
  const newUser = [...users, { username, password, admin }];
  await writeFile(newUser);

  const token = getToken('1h', { username, admin });
  return res.status(200).json({ token });
};
