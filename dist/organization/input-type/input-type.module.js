"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputTypeModule = void 0;
const common_1 = require("@nestjs/common");
const input_type_service_1 = require("./input-type.service");
const input_type_controller_1 = require("./input-type.controller");
let InputTypeModule = class InputTypeModule {
};
InputTypeModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        controllers: [input_type_controller_1.InputTypeController],
        providers: [input_type_service_1.InputTypeService]
    })
], InputTypeModule);
exports.InputTypeModule = InputTypeModule;
//# sourceMappingURL=input-type.module.js.map