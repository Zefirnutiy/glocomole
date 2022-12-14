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
exports.Question = void 0;
const question_type_entity_1 = require("../../question-type/entities/question-type.entity");
const test_entity_1 = require("../../test/entities/test.entity");
const typeorm_1 = require("typeorm");
let Question = class Question {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Question.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Question.prototype, "text", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Question.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Question.prototype, "time", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Question.prototype, "dateDel", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Question.prototype, "timeDel", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Question.prototype, "number", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Question.prototype, "answerVariant", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Question.prototype, "answerCorrect", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => test_entity_1.Test),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", test_entity_1.Test)
], Question.prototype, "testId", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => question_type_entity_1.QuestionType),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", question_type_entity_1.QuestionType)
], Question.prototype, "questionTypeId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Question.prototype, "files", void 0);
Question = __decorate([
    (0, typeorm_1.Entity)()
], Question);
exports.Question = Question;
//# sourceMappingURL=question.entity.js.map