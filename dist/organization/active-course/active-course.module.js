"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActiveCourseModule = void 0;
const common_1 = require("@nestjs/common");
const active_course_service_1 = require("./active-course.service");
const active_course_controller_1 = require("./active-course.controller");
let ActiveCourseModule = class ActiveCourseModule {
};
ActiveCourseModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        controllers: [active_course_controller_1.ActiveCourseController],
        providers: [active_course_service_1.ActiveCourseService]
    })
], ActiveCourseModule);
exports.ActiveCourseModule = ActiveCourseModule;
//# sourceMappingURL=active-course.module.js.map