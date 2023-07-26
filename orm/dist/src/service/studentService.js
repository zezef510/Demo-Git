"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const student_1 = require("../entity/student");
const typeorm_1 = require("typeorm");
class StudentService {
    constructor() {
        this.showStudent = async (id) => {
            let list = await this.studentRepository.createQueryBuilder('Studen')
                .leftJoinAndSelect('Studen.Class', 'Class')
                .where('Studen.classId = :id', { id })
                .getMany();
            return list;
        };
        this.add = async (student) => {
            await this.studentRepository.save(student);
            console.log(student);
        };
        this.edit = async (idEdit, studentEdit) => {
            await this.studentRepository.update(idEdit, studentEdit);
        };
        this.delete = async (id) => {
            await this.studentRepository.createQueryBuilder()
                .delete()
                .from(student_1.Studen)
                .where("id = :id", { id: id })
                .execute();
        };
        this.findByName = async (name) => {
            console.log(name);
            let list = await this.studentRepository.find({
                relations: {
                    Class: true
                },
                where: {
                    name: (0, typeorm_1.Like)(`%${name}%`),
                }
            });
            return list;
        };
        this.sortStudentsByScore = async () => {
            let list = await this.studentRepository.find({
                order: {
                    scoreStudent: "DESC",
                }
            });
            return list;
        };
        this.sortStudentsByScore1 = async () => {
            let list = await this.studentRepository.find({
                order: {
                    scoreStudent: "ASC",
                }
            });
            return list;
        };
        this.findOld = async (old) => {
            let list = await this.studentRepository.find({
                relations: {
                    Class: true
                },
                where: {
                    old: old
                }
            });
            return list;
        };
        this.studentRepository = data_source_1.AppDataSource.getRepository(student_1.Studen);
    }
}
exports.default = new StudentService();
//# sourceMappingURL=studentService.js.map