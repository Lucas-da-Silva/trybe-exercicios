const {
  getToken,
  fsFunctions: { readFile },
  formatError,
} = require('../utils');

module.exports = async (req, res) => {
  try {
    const { username, password } = req.body;

    const users = await readFile();
    const user = users.find(
      (u) => u.username === username && u.password === password,
    );
      
    if (!user) {
      return res.status(401).json(formatError('user not found'));
    }

    const data = { user: user.username, admin: user.admin };
    const token = getToken('1h', data);

    return res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ message: 'Internal error', error: err.message });
  }
};
