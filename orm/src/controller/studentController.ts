import {query, Request, Response} from "express";
import StudentService from "../service/studentService";
import studentController from "./studentController";
import {Studen} from "../entity/student";

class StudentController {
    private StudentService
    constructor() {
        this.StudentService =  StudentService
    }
    findAll = async (req: Request, res: Response) => {
        let list ;
        if(req.query.name){
         list = await this.StudentService.findByName(req.query.name)
        }else {
         list = await this.StudentService.findByName("");
        }
        res.json(list);
    }
    getStudentToByIdClass = async (req: Request, res: Response) => {
        let ShowStudent = await  this.StudentService.showStudent(req.params.id);
        res.json(ShowStudent)

    }
    save =  async (req: Request, res: Response)=>{
        let add = await this.StudentService.add(req.body);
        res.status(200).json({
            message: "Create product success",
            ClassId: add    });
    }
    editStudent = async (req: Request, res: Response) => {
        let EditProduct = await this.StudentService.edit(req.params.id, req.body);
        if (EditProduct) {
            res.json(EditProduct);
        } else {
            res.status(404).json({ message: "Không tìm thấy sinh viên với ID đã cho." });
        }
    };
    deleteStudent = async (req: Request, res: Response)=>{
        const delete1 = await this.StudentService.delete(req.params.id)
        res.json(delete1)
    }
    sortStudentsByScore = async (req: Request, res: Response) => {
        let scoreStudent = req.params.scoreStudent;
        let students

        if (scoreStudent === "DESC") {
          students =  await this.StudentService.sortStudentsByScore();
        }
        else if(scoreStudent === "ASC") {
            students =await this.StudentService.sortStudentsByScore1();
        }else {
            return res.status(400).json({ message: "Yêu cầu không chính xác" });
        }
        res.json(students);

    }



}

export default new StudentController();




