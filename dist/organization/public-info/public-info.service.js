"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicInfoService = void 0;
const common_1 = require("@nestjs/common");
let PublicInfoService = class PublicInfoService {
    create(createPublicInfoDto) {
        return 'This action adds a new publicInfo';
    }
    findAll() {
        return `This action returns all publicInfo`;
    }
    findOne(id) {
        return `This action returns a #${id} publicInfo`;
    }
    update(id, updatePublicInfoDto) {
        return `This action updates a #${id} publicInfo`;
    }
    remove(id) {
        return `This action removes a #${id} publicInfo`;
    }
};
PublicInfoService = __decorate([
    (0, common_1.Injectable)()
], PublicInfoService);
exports.PublicInfoService = PublicInfoService;
//# sourceMappingURL=public-info.service.js.map