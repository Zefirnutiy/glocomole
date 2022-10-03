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
exports.TestResult = void 0;
const client_entity_1 = require("../../client/entities/client.entity");
const course_entity_1 = require("../../course/entities/course.entity");
const test_entity_1 = require("../../test/entities/test.entity");
const typeorm_1 = require("typeorm");
let TestResult = class TestResult {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], TestResult.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], TestResult.prototype, "passageTime", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TestResult.prototype, "assessment", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], TestResult.prototype, "scores", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], TestResult.prototype, "attempts", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], TestResult.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], TestResult.prototype, "time", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => course_entity_1.Course),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", course_entity_1.Course)
], TestResult.prototype, "courseId", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => test_entity_1.Test),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", test_entity_1.Test)
], TestResult.prototype, "testId", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => client_entity_1.Client),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", client_entity_1.Client)
], TestResult.prototype, "clientId", void 0);
TestResult = __decorate([
    (0, typeorm_1.Entity)()
], TestResult);
exports.TestResult = TestResult;
//# sourceMappingURL=test-result.entity.js.map