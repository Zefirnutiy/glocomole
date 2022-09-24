"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionService = void 0;
const common_1 = require("@nestjs/common");
let QuestionService = class QuestionService {
    create(createQuestionDto) {
        return 'This action adds a new question';
    }
    findAll() {
        return `This action returns all question`;
    }
    findOne(id) {
        return `This action returns a #${id} question`;
    }
    update(id, updateQuestionDto) {
        return `This action updates a #${id} question`;
    }
    remove(id) {
        return `This action removes a #${id} question`;
    }
};
QuestionService = __decorate([
    (0, common_1.Injectable)()
], QuestionService);
exports.QuestionService = QuestionService;
//# sourceMappingURL=question.service.js.map