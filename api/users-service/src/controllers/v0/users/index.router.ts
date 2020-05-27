import { Router, Request, Response } from 'express';
import { UserRouter } from './routes/user.router';

const router: Router = Router();

router.use('/users', UserRouter);

router.get('/', async (req: Request, res: Response) => {
    console.log('users feed')
    res.send(`users v0 feed`);
});

export const IndexRouter: Router = router;
