import {Request, Response} from "express";
import productService from "../service/productService";
import * as fs from "fs";

class ProductController {
    private productService;

    constructor() {
        this.productService = productService;
    }

    findAll = async (req: Request, res: Response) => {


        let listProduct = await this.productService.getAll();
        res.json(listProduct);
    }

    add = async (req: Request, res: Response)=>{
        let add = await this.productService.add(req.body);
        res.status(200).json({

            message: "Create product success",
            product: add    });
        }
    delete = async (req : Request, res: Response)=> {
        const delete1 = await this.productService.delete(req.params.id)
        res.json(delete1)
    }
    edit1 = async (req : Request, res: Response)=>{
        const EditProduct = await this.productService.edit(req.params.id,
            {name :req.body.name,
                price : req.body.price,
                image : req.body.price,
                category : req.body.category,
                studenId : req.body.studenId})
        res.json(EditProduct)
    }
    // edit1 = async (req: Request, res: Response) => {
    //     const  editedProduct = await this.productService.edit(req.params.id,req.body)
    //         res.json(editedProduct);
    //
    // };
    findByID = async (req: Request, res: Response) => {
        const id = req.params.id;

        const products = await this.productService.findByID(id);
        res.json(products);
    }


}

export default new ProductController();
