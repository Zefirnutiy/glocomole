"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFileInformationDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_file_information_dto_1 = require("./create-file-information.dto");
class UpdateFileInformationDto extends (0, mapped_types_1.PartialType)(create_file_information_dto_1.CreateFileInformationDto) {
}
exports.UpdateFileInformationDto = UpdateFileInformationDto;
//# sourceMappingURL=update-file-information.dto.js.map