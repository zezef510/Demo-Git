"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const studentController_1 = __importDefault(require("../controller/studentController"));
const studentRouter = (0, express_1.Router)();
studentRouter.get("", studentController_1.default.findOld);
studentRouter.post('/', studentController_1.default.save);
studentRouter.delete('/:id', studentController_1.default.deleteStudent);
studentRouter.put('/:id', studentController_1.default.editStudent);
exports.default = studentRouter;
//# sourceMappingURL=studentRouter.js.map