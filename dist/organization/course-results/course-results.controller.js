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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseResultsController = void 0;
const common_1 = require("@nestjs/common");
const course_results_service_1 = require("./course-results.service");
const create_course_result_dto_1 = require("./dto/create-course-result.dto");
const update_course_result_dto_1 = require("./dto/update-course-result.dto");
let CourseResultsController = class CourseResultsController {
    constructor(courseResultsService) {
        this.courseResultsService = courseResultsService;
    }
    create(createCourseResultDto) {
        return this.courseResultsService.create(createCourseResultDto);
    }
    findAll() {
        return this.courseResultsService.findAll();
    }
    findOne(id) {
        return this.courseResultsService.findOne(+id);
    }
    update(id, updateCourseResultDto) {
        return this.courseResultsService.update(+id, updateCourseResultDto);
    }
    remove(id) {
        return this.courseResultsService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_course_result_dto_1.CreateCourseResultDto]),
    __metadata("design:returntype", void 0)
], CourseResultsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CourseResultsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CourseResultsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_course_result_dto_1.UpdateCourseResultDto]),
    __metadata("design:returntype", void 0)
], CourseResultsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CourseResultsController.prototype, "remove", null);
CourseResultsController = __decorate([
    (0, common_1.Controller)('course-results'),
    __metadata("design:paramtypes", [course_results_service_1.CourseResultsService])
], CourseResultsController);
exports.CourseResultsController = CourseResultsController;
//# sourceMappingURL=course-results.controller.js.map