"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const classService_1 = __importDefault(require("../service/classService"));
class classController {
    constructor() {
        this.findAll = async (req, res) => {
            let listClass = await this.classService.getAll();
            res.json(listClass);
        };
        this.add = async (req, res) => {
            let add = await this.classService.add(req.body);
            res.status(200).json({
                message: "Create product success",
                product: add
            });
        };
        this.delete = async (req, res) => {
            const delete1 = await this.classService.delete(req.params.id);
            res.json(delete1);
        };
        this.edit1 = async (req, res) => {
            const EditClass = await this.classService.edit(req.params.id, { ClassName: req.body.ClassName,
                Teacher: req.body.Teacher,
            });
            res.json(EditClass);
        };
        this.findByID = async (req, res) => {
            const id = req.params.id;
            const Class = await this.classService.findByID(id);
            res.json(Class);
        };
        this.classService = classService_1.default;
    }
}
exports.default = new classController();
//# sourceMappingURL=classController.js.map