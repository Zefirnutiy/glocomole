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
exports.DeadLineController = void 0;
const common_1 = require("@nestjs/common");
const dead_line_service_1 = require("./dead-line.service");
const create_dead_line_dto_1 = require("./dto/create-dead-line.dto");
const update_dead_line_dto_1 = require("./dto/update-dead-line.dto");
let DeadLineController = class DeadLineController {
    constructor(deadLineService) {
        this.deadLineService = deadLineService;
    }
    create(createDeadLineDto) {
        return this.deadLineService.create(createDeadLineDto);
    }
    findAll() {
        return this.deadLineService.findAll();
    }
    findOne(id) {
        return this.deadLineService.findOne(+id);
    }
    update(id, updateDeadLineDto) {
        return this.deadLineService.update(+id, updateDeadLineDto);
    }
    remove(id) {
        return this.deadLineService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dead_line_dto_1.CreateDeadLineDto]),
    __metadata("design:returntype", void 0)
], DeadLineController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DeadLineController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DeadLineController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_dead_line_dto_1.UpdateDeadLineDto]),
    __metadata("design:returntype", void 0)
], DeadLineController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DeadLineController.prototype, "remove", null);
DeadLineController = __decorate([
    (0, common_1.Controller)('dead-line'),
    __metadata("design:paramtypes", [dead_line_service_1.DeadLineService])
], DeadLineController);
exports.DeadLineController = DeadLineController;
//# sourceMappingURL=dead-line.controller.js.map