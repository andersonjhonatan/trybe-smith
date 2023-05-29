import express from 'express';
import LoginRotersControl from '../Controller/Login.controller';

const LoginRouter = express.Router();

LoginRouter.post('/login', LoginRotersControl.loginController);

export default LoginRouter;