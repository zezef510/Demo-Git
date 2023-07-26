"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const classController_1 = __importDefault(require("../controller/classController"));
const classRouter = (0, express_1.Router)();
classRouter.get('', classController_1.default.findAll);
classRouter.get("/:id", classController_1.default.findByID);
classRouter.post('', classController_1.default.add);
classRouter.delete("/:id", classController_1.default.delete);
classRouter.put("/:id", classController_1.default.edit1);
exports.default = classRouter;
//# sourceMappingURL=classRouter.js.map