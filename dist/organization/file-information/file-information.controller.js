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
exports.FileInformationController = void 0;
const common_1 = require("@nestjs/common");
const file_information_service_1 = require("./file-information.service");
const create_file_information_dto_1 = require("./dto/create-file-information.dto");
const update_file_information_dto_1 = require("./dto/update-file-information.dto");
let FileInformationController = class FileInformationController {
    constructor(fileInformationService) {
        this.fileInformationService = fileInformationService;
    }
    create(createFileInformationDto) {
        return this.fileInformationService.create(createFileInformationDto);
    }
    findAll() {
        return this.fileInformationService.findAll();
    }
    findOne(id) {
        return this.fileInformationService.findOne(+id);
    }
    update(id, updateFileInformationDto) {
        return this.fileInformationService.update(+id, updateFileInformationDto);
    }
    remove(id) {
        return this.fileInformationService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_file_information_dto_1.CreateFileInformationDto]),
    __metadata("design:returntype", void 0)
], FileInformationController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FileInformationController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FileInformationController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_file_information_dto_1.UpdateFileInformationDto]),
    __metadata("design:returntype", void 0)
], FileInformationController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FileInformationController.prototype, "remove", null);
FileInformationController = __decorate([
    (0, common_1.Controller)('file-information'),
    __metadata("design:paramtypes", [file_information_service_1.FileInformationService])
], FileInformationController);
exports.FileInformationController = FileInformationController;
//# sourceMappingURL=file-information.controller.js.map