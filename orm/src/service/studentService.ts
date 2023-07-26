import {AppDataSource} from "../data-source";
import {Studen} from "../entity/student";
import {ProductPro} from "../entity/product";
import { Like } from "typeorm"

class StudentService {
    private studentRepository;
    constructor() {
        this.studentRepository = AppDataSource.getRepository(Studen)
    }


    showStudent = async (id)=>{

        let list = await this.studentRepository.createQueryBuilder('Studen')
                 .leftJoinAndSelect('Studen.Class', 'Class')
                 .where('Studen.classId = :id', { id })
                .getMany();
        return list

    }
    add = async (student) => {
        await this.studentRepository.save(student)
        console.log(student)
    }
    edit  = async (idEdit,studentEdit)=>{
        await this.studentRepository.update(idEdit,studentEdit)

    }
    delete = async(id) => {
        await this.studentRepository.createQueryBuilder()
            .delete()
            .from(Studen)
            .where("id = :id", { id: id })
            .execute();
    }
    findByName = async(name) =>{
        console.log(name)
      let list =  await this.studentRepository.find({
          relations: {
              Class: true
          },
          where: {
              name: Like(`%${name}%`),          }
      });
        return list
    }

    sortStudentsByScore = async() => {
        let list = await this.studentRepository.find({
            order: {
                scoreStudent: "DESC",
            }
        })
        return list
    }
    sortStudentsByScore1 = async() => {
        let list = await this.studentRepository.find({
            order: {
                scoreStudent: "ASC",
            }
        })
        return list
    }


}
export default new StudentService();
