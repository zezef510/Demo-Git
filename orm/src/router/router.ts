import {Router} from "express";
import productRouter from "./productRouter";
import studentRouter from "./studentRouter";
import classRouter from "./classRouter";

const router = Router();
router.use('/products', productRouter);
router.use('/students', studentRouter);
router.use('/class', classRouter);
export default router;
