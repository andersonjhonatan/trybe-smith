import express from 'express';

import productsRouter from './routers/product.routes';
import OrdersRouter from './routers/Orders.routes';
import LoginRouter from './routers/login.routes';

const app = express();

app.use(express.json());

app.use(productsRouter);
app.use(OrdersRouter);
app.use(LoginRouter);

export default app;
