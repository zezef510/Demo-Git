declare class ProductService {
    private productRepository;
    constructor();
    getAll: () => Promise<any>;
    findByID: (id: any) => Promise<any>;
    add: (product: any) => Promise<void>;
    edit: (idEdit: any, productEdit: any) => Promise<void>;
    delete: (id: any) => Promise<void>;
}
declare const _default: ProductService;
export default _default;
