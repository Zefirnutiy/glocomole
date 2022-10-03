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
exports.FileInformation = void 0;
const client_entity_1 = require("../../client/entities/client.entity");
const file_entity_1 = require("../../file/entities/file.entity");
const public_info_entity_1 = require("../../public-info/entities/public-info.entity");
const question_entity_1 = require("../../question/entities/question.entity");
const test_entity_1 = require("../../test/entities/test.entity");
const typeorm_1 = require("typeorm");
let FileInformation = class FileInformation {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], FileInformation.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => client_entity_1.Client),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", client_entity_1.Client)
], FileInformation.prototype, "clientId", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => file_entity_1.File),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", file_entity_1.File)
], FileInformation.prototype, "fileId", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => public_info_entity_1.PublicInfo),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", public_info_entity_1.PublicInfo)
], FileInformation.prototype, "publicInfoId", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => test_entity_1.Test),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", test_entity_1.Test)
], FileInformation.prototype, "testId", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => question_entity_1.Question),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", question_entity_1.Question)
], FileInformation.prototype, "questionId", void 0);
FileInformation = __decorate([
    (0, typeorm_1.Entity)()
], FileInformation);
exports.FileInformation = FileInformation;
//# sourceMappingURL=file-information.entity.js.map