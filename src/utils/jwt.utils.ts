import jwt from 'jsonwebtoken';
import { TokenPayload } from '../types/Token';

const secret = process.env.JWT_SECRET || 'terrivel';

const sign = (payload: TokenPayload): string => {
  const token = jwt.sign(payload, secret);
  return token;
};

const verify = (token: string): TokenPayload => {
  const result = jwt.verify(token, secret) as TokenPayload;
  return result;
};

export default { sign, verify };
