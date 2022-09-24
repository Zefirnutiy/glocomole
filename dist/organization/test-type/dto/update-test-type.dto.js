"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTestTypeDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_test_type_dto_1 = require("./create-test-type.dto");
class UpdateTestTypeDto extends (0, mapped_types_1.PartialType)(create_test_type_dto_1.CreateTestTypeDto) {
}
exports.UpdateTestTypeDto = UpdateTestTypeDto;
//# sourceMappingURL=update-test-type.dto.js.map