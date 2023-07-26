"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("../entity/product");
const data_source_1 = require("../data-source");
class ProductService {
    constructor() {
        this.getAll = async () => {
            let show = await this.productRepository
                .find({
                relations: {
                    Studen: true
                },
            });
            return show;
        };
        this.findByID = async (id) => {
            return await this.productRepository.find({
                where: [
                    { id }
                ]
            });
        };
        this.add = async (product) => {
            await this.productRepository.save(product);
        };
        this.edit = async (idEdit, productEdit) => {
            await this.productRepository.createQueryBuilder()
                .update(product_1.ProductPro)
                .set({ name: productEdit.name,
                price: productEdit.price,
                image: productEdit.image,
                category: productEdit.category,
                studentId: productEdit.studentId })
                .where("id = :id", { id: idEdit })
                .execute();
        };
        this.delete = async (id) => {
            await this.productRepository.createQueryBuilder()
                .delete()
                .from(product_1.ProductPro)
                .where("id = :id", { id: id })
                .execute();
        };
        this.productRepository = data_source_1.AppDataSource.getRepository(product_1.ProductPro);
    }
}
exports.default = new ProductService();
//# sourceMappingURL=productService.js.map