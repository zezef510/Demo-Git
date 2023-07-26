import {Router} from "express";
import productController from "../controller/productController";

const productRouter = Router();
productRouter.get('', productController.findAll);
productRouter.get("/:id", productController.findByID);
productRouter.post('', productController.add);
productRouter.delete("/:id",productController.delete);
productRouter.put("/:id",productController.edit1);

export default productRouter;
