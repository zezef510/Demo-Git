import {Router} from "express";
import studentController from "../controller/studentController";

const studentRouter = Router();
studentRouter.get('/:scoreStudent',studentController.sortStudentsByScore)

studentRouter.get('',studentController.findAll)
studentRouter.get('/:id',studentController.getStudentToByIdClass)
studentRouter.get('/:scoreStudent',studentController.sortStudentsByScore)
studentRouter.post('/',studentController.save)
studentRouter.delete('/:id',studentController.deleteStudent)
studentRouter.put('/:id',studentController.editStudent)

export default studentRouter