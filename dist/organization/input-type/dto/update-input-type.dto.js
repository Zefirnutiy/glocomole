"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateInputTypeDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_input_type_dto_1 = require("./create-input-type.dto");
class UpdateInputTypeDto extends (0, mapped_types_1.PartialType)(create_input_type_dto_1.CreateInputTypeDto) {
}
exports.UpdateInputTypeDto = UpdateInputTypeDto;
//# sourceMappingURL=update-input-type.dto.js.map