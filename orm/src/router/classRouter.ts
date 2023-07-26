import {Router} from "express";
import classController from "../controller/classController";

const classRouter = Router();
classRouter.get('', classController.findAll);
classRouter.get("/:id", classController.findByID);
classRouter.post('', classController.add);
classRouter.delete("/:id",classController.delete);
classRouter.put("/:id",classController.edit1);

export default classRouter;
