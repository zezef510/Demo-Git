declare class classService {
    private classRepository;
    constructor();
    getAll: () => Promise<any>;
    findByID: (id: any) => Promise<any>;
    add: (lass: any) => Promise<void>;
    edit: (idEdit: any, classEdit: any) => Promise<void>;
    delete: (id: any) => Promise<void>;
}
declare const _default: classService;
export default _default;
