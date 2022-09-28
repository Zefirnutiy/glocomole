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
exports.PublicInfo = void 0;
const client_entity_1 = require("../../client/entities/client.entity");
const typeorm_1 = require("typeorm");
let PublicInfo = class PublicInfo {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PublicInfo.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PublicInfo.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PublicInfo.prototype, "text", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], PublicInfo.prototype, "files", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], PublicInfo.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], PublicInfo.prototype, "time", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], PublicInfo.prototype, "dateDel", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], PublicInfo.prototype, "timeDel", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => client_entity_1.Client),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", client_entity_1.Client)
], PublicInfo.prototype, "clientId", void 0);
PublicInfo = __decorate([
    (0, typeorm_1.Entity)()
], PublicInfo);
exports.PublicInfo = PublicInfo;
//# sourceMappingURL=public-info.entity.js.map