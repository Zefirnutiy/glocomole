"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeModule = void 0;
const common_1 = require("@nestjs/common");
const theme_service_1 = require("./theme.service");
const theme_controller_1 = require("./theme.controller");
const typeorm_1 = require("@nestjs/typeorm");
const theme_entity_1 = require("./entities/theme.entity");
let ThemeModule = class ThemeModule {
};
ThemeModule = __decorate([
    (0, common_1.Module)({
        controllers: [theme_controller_1.ThemeController],
        providers: [theme_service_1.ThemeService],
        imports: [typeorm_1.TypeOrmModule.forFeature([theme_entity_1.Theme])]
    })
], ThemeModule);
exports.ThemeModule = ThemeModule;
//# sourceMappingURL=theme.module.js.map