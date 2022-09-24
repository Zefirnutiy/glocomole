"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateActiveTestDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_active_test_dto_1 = require("./create-active-test.dto");
class UpdateActiveTestDto extends (0, mapped_types_1.PartialType)(create_active_test_dto_1.CreateActiveTestDto) {
}
exports.UpdateActiveTestDto = UpdateActiveTestDto;
//# sourceMappingURL=update-active-test.dto.js.map