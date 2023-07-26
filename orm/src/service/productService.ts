import {ProductPro} from "../entity/product";
import {AppDataSource} from "../data-source";
import {Studen} from  "../entity/student";
class ProductService {
    private productRepository;
    constructor() {

        this.productRepository = AppDataSource.getRepository(ProductPro)
    }

    getAll = async ()  => {
        let show = await this.productRepository
            .find({
                relations: {
                   Studen: true
                },
            })
        return show;
    }

    // findAllFor2 = async ( name: string, id: number) => {
    //     return await this.productRepository.createQueryBuilder('ProductPro')
    //         .leftJoinAndSelect('ProductPro.Studen', 'Studen')
    //         .where('ProductPro.name = :name', { name })
    //         .andWhere('ProductPro.id = :id', { id })
    //         .getMany();
    // };
    findByID = async (id) => {
        return  await this.productRepository.find({
            where: [
                {id}
            ]
        })
    }


        add = async (product) => {
        await this.productRepository.save(product)
    }


         edit  = async (idEdit,productEdit)=>{
             await this.productRepository.createQueryBuilder()
                 .update(ProductPro)
                 .set({name: productEdit.name,
                        price : productEdit.price,
                        image :  productEdit.image,
                        category : productEdit.category,
                        studentId : productEdit.studentId})

                 .where("id = :id", { id: idEdit })
                 .execute()
     }
    delete = async(id) => {
       await this.productRepository.createQueryBuilder()
           .delete()
           .from(ProductPro)
           .where("id = :id", { id: id })
           .execute();
    }

}

export default new ProductService();
