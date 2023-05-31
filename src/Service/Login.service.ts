import bcrypt from 'bcryptjs';
import UserModel from '../database/models/user.model';
import { ServiceResponse } from '../types/StatusHTTP';
import jwt from '../utils/jwt.utils';

const login = async (username: string, password: string): Promise<ServiceResponse<string>> => {
  const result = await UserModel.findOne({ where: { username } });

  if (result === null || !bcrypt.compareSync(password, result.dataValues.password)) {
    return { status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' } };
  }

  const token = jwt.sign({ id: result.dataValues.id, username: result.dataValues.username });

  return { status: 'SUCCESS', data: { token } };
};

export default { login };
