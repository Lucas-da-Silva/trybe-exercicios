import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import { UserResponse, newUser } from '../types/user.type';

const querySelectAll = 'SELECT id, name, email FROM TypeScriptExpress.Users';

const login = async (email: string, password: string): Promise<UserResponse> => {
  const [[user]] = await connection.execute<RowDataPacket[] & UserResponse[]>(
    `${querySelectAll} WHERE email=? AND password=?`,
    [email, password]
  );
  return user;
};

const getAll = async (): Promise<UserResponse[]> => {
  const [users] = await connection.execute<RowDataPacket[] & UserResponse[]>(
    querySelectAll
  );
  return users;
};

const getById = async (id: number): Promise<UserResponse> => {
  const [[user]] = await connection.execute<RowDataPacket[] & UserResponse[]>(
    `${querySelectAll} WHERE id=?`,
    [id]
  );
  return user;
};

const getByEmail = async (email: string): Promise<UserResponse[]> => {
  const [users] = await connection.execute<RowDataPacket[] & UserResponse[]>(
    `${querySelectAll} WHERE email=?`,
    [email]
  );
  return users;
};

const create = async ({
  name,
  email,
  password,
}: newUser): Promise<UserResponse> => {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    `INSERT INTO TypeScriptExpress.Users(name, email, password) VALUES (?, ?, ?)`,
    [name, email, password]
  );
  return { id: insertId, name, email };
};

const update = async (
  id: number,
  { name, email, password }: newUser
): Promise<UserResponse> => {
  await connection.execute<ResultSetHeader>(
    `Update TypeScriptExpress.Users SET name=?, email=?, password=? WHERE id=?`,
    [name, email, password, id]
  );
  return { id, name, email };
};

export default { login, getAll, getById, getByEmail, create, update };
