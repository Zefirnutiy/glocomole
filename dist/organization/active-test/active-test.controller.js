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
exports.ActiveTestController = void 0;
const common_1 = require("@nestjs/common");
const active_test_service_1 = require("./active-test.service");
const create_active_test_dto_1 = require("./dto/create-active-test.dto");
const update_active_test_dto_1 = require("./dto/update-active-test.dto");
let ActiveTestController = class ActiveTestController {
    constructor(activeTestService) {
        this.activeTestService = activeTestService;
    }
    create(createActiveTestDto) {
        return this.activeTestService.create(createActiveTestDto);
    }
    findAll() {
        return this.activeTestService.findAll();
    }
    findOne(id) {
        return this.activeTestService.findOne(+id);
    }
    update(id, updateActiveTestDto) {
        return this.activeTestService.update(+id, updateActiveTestDto);
    }
    remove(id) {
        return this.activeTestService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_active_test_dto_1.CreateActiveTestDto]),
    __metadata("design:returntype", void 0)
], ActiveTestController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ActiveTestController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ActiveTestController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_active_test_dto_1.UpdateActiveTestDto]),
    __metadata("design:returntype", void 0)
], ActiveTestController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ActiveTestController.prototype, "remove", null);
ActiveTestController = __decorate([
    (0, common_1.Controller)('active-test'),
    __metadata("design:paramtypes", [active_test_service_1.ActiveTestService])
], ActiveTestController);
exports.ActiveTestController = ActiveTestController;
//# sourceMappingURL=active-test.controller.js.map