import {Request, Response} from "express";
import productService from "../service/productService";
import * as fs from "fs";
import classService from "../service/classService";

class classController {
    private classService;

    constructor() {
        this.classService = classService;
    }

    findAll = async (req: Request, res: Response) => {


        let listClass = await this.classService.getAll();
        res.json(listClass);
    }

    add = async (req: Request, res: Response)=>{
        let add = await this.classService.add(req.body);
        res.status(200).json({

            message: "Create product success",
            product: add    });
        }
    delete = async (req : Request, res: Response)=> {
        const delete1 = await this.classService.delete(req.params.id)
        res.json(delete1)
    }
    edit1 = async (req : Request, res: Response)=>{
        const EditClass = await this.classService.edit(req.params.id,
            {ClassName :req.body.ClassName,
                Teacher : req.body.Teacher,
               })
        res.json(EditClass)
    }
    // edit1 = async (req: Request, res: Response) => {
    //     const  editedProduct = await this.productService.edit(req.params.id,req.body)
    //         res.json(editedProduct);
    //
    // };
    findByID = async (req: Request, res: Response) => {
        const id = req.params.id;

        const Class = await this.classService.findByID(id);
        res.json(Class);
    }


}

export default new classController();
