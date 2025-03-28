import { Router } from 'express';
import squareRoot from "./square-root.route";

const router = Router();

router.use('/square-root', squareRoot)

export default router;