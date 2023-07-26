import { Request, Response } from "express";
declare class StudentController {
    private StudentService;
    constructor();
    findAll: (req: Request, res: Response) => Promise<void>;
    getStudentToByIdClass: (req: Request, res: Response) => Promise<void>;
    save: (req: Request, res: Response) => Promise<void>;
    editStudent: (req: Request, res: Response) => Promise<void>;
    deleteStudent: (req: Request, res: Response) => Promise<void>;
    sortStudentsByScore: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
declare const _default: StudentController;
export default _default;
