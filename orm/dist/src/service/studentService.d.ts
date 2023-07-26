declare class StudentService {
    private studentRepository;
    constructor();
    showStudent: (id: any) => Promise<any>;
    add: (student: any) => Promise<void>;
    edit: (idEdit: any, studentEdit: any) => Promise<void>;
    delete: (id: any) => Promise<void>;
    findByName: (name: any) => Promise<any>;
    sortStudentsByScore: () => Promise<any>;
    sortStudentsByScore1: () => Promise<any>;
}
declare const _default: StudentService;
export default _default;
