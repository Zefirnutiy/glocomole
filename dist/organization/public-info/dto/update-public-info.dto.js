"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePublicInfoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_public_info_dto_1 = require("./create-public-info.dto");
class UpdatePublicInfoDto extends (0, mapped_types_1.PartialType)(create_public_info_dto_1.CreatePublicInfoDto) {
}
exports.UpdatePublicInfoDto = UpdatePublicInfoDto;
//# sourceMappingURL=update-public-info.dto.js.map