import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { ProductRoutes } from './app/modules/Product/product.routes';
import { UserRoutes } from './app/modules/User/user.routes';
import { OrderRoutes } from './app/modules/Order/order.routes';

const app: Application = express();

// Parsers
app.use(express.json());
app.use(cors());

// Paths
app.use('/api/v1/users', UserRoutes);
app.use('/api/v1/products', ProductRoutes);
app.use('/api/v1/orders', OrderRoutes);

// Testing
app.get('/', async (req: Request, res: Response) => {
	res.send(`Hello World!`);
});

export default app;
