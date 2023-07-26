"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Studen = void 0;
const typeorm_1 = require("typeorm");
const product_1 = require("./product");
const Class_1 = require("./Class");
let Studen = exports.Studen = class Studen {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Studen.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Studen.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Studen.prototype, "old", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], Studen.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], Studen.prototype, "scoreStudent", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => product_1.ProductPro, (product) => product.Studen),
    __metadata("design:type", Object)
], Studen.prototype, "ProductPro", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Class_1.Class, (Class) => Class.Studen),
    __metadata("design:type", Class_1.Class)
], Studen.prototype, "Class", void 0);
exports.Studen = Studen = __decorate([
    (0, typeorm_1.Entity)()
], Studen);
//# sourceMappingURL=student.js.map