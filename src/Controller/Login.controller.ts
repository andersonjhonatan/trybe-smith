import { Request, Response } from 'express';
import LoginService from '../Service/Login.service';
import mapStatusHTTP from '../utils/statusHttp';

const loginController = async (req: Request, res: Response): Promise<Response> => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: '"username" and "password" are required' });
  }

  const { status, data } = await LoginService.login(username, password);

  return res.status(mapStatusHTTP(status)).json(data);
};

export default { loginController };