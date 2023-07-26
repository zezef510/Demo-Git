import {ProductPro} from "../entity/product";
import {AppDataSource} from "../data-source";
import {Class} from "../entity/Class";
class classService {
    private classRepository;
    constructor() {

        this.classRepository = AppDataSource.getRepository(Class)
    }

    getAll = async ()  => {
        let show = await this.classRepository
            .find({
                relations: {
                    Studen: true
                },
            })
        return show;
    }

    // findAllFor2 = async ( name: string, id: number) => {
    //     return await this.classRepository.createQueryBuilder('ProductPro')
    //         .leftJoinAndSelect('ProductPro.Studen', 'Studen')
    //         .where('ProductPro.name = :name', { name })
    //         .andWhere('ProductPro.id = :id', { id })
    //         .getMany();
    // };
    findByID = async (id) => {
        return  await this.classRepository.find({
            where: [
                {id}
            ]
        })
    }


    add = async (lass) => {
        await this.classRepository.save(lass)
    }


    edit  = async (idEdit,classEdit)=>{
        await this.classRepository.createQueryBuilder()
            .update(Class)
            .set({ClassName: classEdit.ClassName,
                Teacher : classEdit.Teacher

               })

            .where("id = :id", { id: idEdit })
            .execute()
    }
    delete = async(id) => {
        await this.classRepository.createQueryBuilder()
            .delete()
            .from(Class)
            .where("id = :id", { id: id })
            .execute();
    }

}

export default new classService();
