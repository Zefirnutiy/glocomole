"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDeadLineDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_dead_line_dto_1 = require("./create-dead-line.dto");
class UpdateDeadLineDto extends (0, mapped_types_1.PartialType)(create_dead_line_dto_1.CreateDeadLineDto) {
}
exports.UpdateDeadLineDto = UpdateDeadLineDto;
//# sourceMappingURL=update-dead-line.dto.js.map