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
exports.CourseResult = void 0;
const client_entity_1 = require("../../client/entities/client.entity");
const course_entity_1 = require("../../course/entities/course.entity");
const typeorm_1 = require("typeorm");
let CourseResult = class CourseResult {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CourseResult.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CourseResult.prototype, "assessment", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], CourseResult.prototype, "scores", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], CourseResult.prototype, "numberTests", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], CourseResult.prototype, "passageTime", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], CourseResult.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], CourseResult.prototype, "time", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => client_entity_1.Client),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", client_entity_1.Client)
], CourseResult.prototype, "clientId", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => course_entity_1.Course),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", course_entity_1.Course)
], CourseResult.prototype, "courseId", void 0);
CourseResult = __decorate([
    (0, typeorm_1.Entity)()
], CourseResult);
exports.CourseResult = CourseResult;
//# sourceMappingURL=course-result.entity.js.map