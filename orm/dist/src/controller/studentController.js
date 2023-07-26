"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const studentService_1 = __importDefault(require("../service/studentService"));
class StudentController {
    constructor() {
        this.findAll = async (req, res) => {
            let list;
            if (req.query.name) {
                list = await this.StudentService.findByName(req.query.name);
            }
            else {
                list = await this.StudentService.findByName("");
            }
            res.json(list);
        };
        this.getStudentToByIdClass = async (req, res) => {
            let ShowStudent = await this.StudentService.showStudent(req.params.id);
            res.json(ShowStudent);
        };
        this.save = async (req, res) => {
            let add = await this.StudentService.add(req.body);
            res.status(200).json({
                message: "Create product success",
                ClassId: add
            });
        };
        this.editStudent = async (req, res) => {
            let EditProduct = await this.StudentService.edit(req.params.id, req.body);
            if (EditProduct) {
                res.json(EditProduct);
            }
            else {
                res.status(404).json({ message: "Không tìm thấy sinh viên với ID đã cho." });
            }
        };
        this.deleteStudent = async (req, res) => {
            const delete1 = await this.StudentService.delete(req.params.id);
            res.json(delete1);
        };
        this.sortStudentsByScore = async (req, res) => {
            let scoreStudent = req.params.scoreStudent;
            let students;
            if (scoreStudent === "DESC") {
                students = await this.StudentService.sortStudentsByScore();
            }
            else if (scoreStudent === "ASC") {
                students = await this.StudentService.sortStudentsByScore1();
            }
            else {
                return res.status(400).json({ message: "Yêu cầu không chính xác" });
            }
            res.json(students);
        };
        this.StudentService = studentService_1.default;
    }
}
exports.default = new StudentController();
//# sourceMappingURL=studentController.js.map