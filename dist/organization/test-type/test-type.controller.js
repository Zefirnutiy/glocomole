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
exports.TestTypeController = void 0;
const common_1 = require("@nestjs/common");
const test_type_service_1 = require("./test-type.service");
const create_test_type_dto_1 = require("./dto/create-test-type.dto");
const update_test_type_dto_1 = require("./dto/update-test-type.dto");
let TestTypeController = class TestTypeController {
    constructor(testTypeService) {
        this.testTypeService = testTypeService;
    }
    create(createTestTypeDto) {
        return this.testTypeService.create(createTestTypeDto);
    }
    findAll() {
        return this.testTypeService.findAll();
    }
    findOne(id) {
        return this.testTypeService.findOne(+id);
    }
    update(id, updateTestTypeDto) {
        return this.testTypeService.update(+id, updateTestTypeDto);
    }
    remove(id) {
        return this.testTypeService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_test_type_dto_1.CreateTestTypeDto]),
    __metadata("design:returntype", void 0)
], TestTypeController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TestTypeController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TestTypeController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_test_type_dto_1.UpdateTestTypeDto]),
    __metadata("design:returntype", void 0)
], TestTypeController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TestTypeController.prototype, "remove", null);
TestTypeController = __decorate([
    (0, common_1.Controller)('test-type'),
    __metadata("design:paramtypes", [test_type_service_1.TestTypeService])
], TestTypeController);
exports.TestTypeController = TestTypeController;
//# sourceMappingURL=test-type.controller.js.map