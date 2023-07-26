"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productService_1 = __importDefault(require("../service/productService"));
class ProductController {
    constructor() {
        this.findAll = async (req, res) => {
            let listProduct = await this.productService.getAll();
            res.json(listProduct);
        };
        this.add = async (req, res) => {
            let add = await this.productService.add(req.body);
            res.status(200).json({
                message: "Create product success",
                product: add
            });
        };
        this.delete = async (req, res) => {
            const delete1 = await this.productService.delete(req.params.id);
            res.json(delete1);
        };
        this.edit1 = async (req, res) => {
            const EditProduct = await this.productService.edit(req.params.id, { name: req.body.name,
                price: req.body.price,
                image: req.body.price,
                category: req.body.category,
                studenId: req.body.studenId });
            res.json(EditProduct);
        };
        this.findByID = async (req, res) => {
            const id = req.params.id;
            const products = await this.productService.findByID(id);
            res.json(products);
        };
        this.productService = productService_1.default;
    }
}
exports.default = new ProductController();
//# sourceMappingURL=productController.js.map