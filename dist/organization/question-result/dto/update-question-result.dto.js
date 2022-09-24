"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateQuestionResultDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_question_result_dto_1 = require("./create-question-result.dto");
class UpdateQuestionResultDto extends (0, mapped_types_1.PartialType)(create_question_result_dto_1.CreateQuestionResultDto) {
}
exports.UpdateQuestionResultDto = UpdateQuestionResultDto;
//# sourceMappingURL=update-question-result.dto.js.map