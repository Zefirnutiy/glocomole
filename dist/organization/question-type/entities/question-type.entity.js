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
exports.QuestionType = void 0;
const input_type_entity_1 = require("../../input-type/entities/input-type.entity");
const typeorm_1 = require("typeorm");
let QuestionType = class QuestionType {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], QuestionType.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], QuestionType.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => input_type_entity_1.InputType),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Number)
], QuestionType.prototype, "inputTypeId", void 0);
QuestionType = __decorate([
    (0, typeorm_1.Entity)()
], QuestionType);
exports.QuestionType = QuestionType;
//# sourceMappingURL=question-type.entity.js.map