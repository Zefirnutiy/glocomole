"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTestResultDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_test_result_dto_1 = require("./create-test-result.dto");
class UpdateTestResultDto extends (0, mapped_types_1.PartialType)(create_test_result_dto_1.CreateTestResultDto) {
}
exports.UpdateTestResultDto = UpdateTestResultDto;
//# sourceMappingURL=update-test-result.dto.js.map