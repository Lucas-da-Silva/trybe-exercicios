import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET ||  'mySecret';

const createToken = (data: { email: string }, expiresIn: string = '1h') => {
  const jwtConfig = { expiresIn, alg: 'HS256', typ: 'JWT' };
  const token = jwt.sign({ data }, secret, jwtConfig);
  return token;
};

const verifyToken = (token: string) => jwt.verify(token, secret);

export default { createToken, verifyToken };