"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const Class_1 = require("../entity/Class");
class classService {
    constructor() {
        this.getAll = async () => {
            let show = await this.classRepository
                .find({
                relations: {
                    Studen: true
                },
            });
            return show;
        };
        this.findByID = async (id) => {
            return await this.classRepository.find({
                where: [
                    { id }
                ]
            });
        };
        this.add = async (lass) => {
            await this.classRepository.save(lass);
        };
        this.edit = async (idEdit, classEdit) => {
            await this.classRepository.createQueryBuilder()
                .update(Class_1.Class)
                .set({ ClassName: classEdit.ClassName,
                Teacher: classEdit.Teacher
            })
                .where("id = :id", { id: idEdit })
                .execute();
        };
        this.delete = async (id) => {
            await this.classRepository.createQueryBuilder()
                .delete()
                .from(Class_1.Class)
                .where("id = :id", { id: id })
                .execute();
        };
        this.classRepository = data_source_1.AppDataSource.getRepository(Class_1.Class);
    }
}
exports.default = new classService();
//# sourceMappingURL=classService.js.map