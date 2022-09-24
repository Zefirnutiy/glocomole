"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCourseResultDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_course_result_dto_1 = require("./create-course-result.dto");
class UpdateCourseResultDto extends (0, mapped_types_1.PartialType)(create_course_result_dto_1.CreateCourseResultDto) {
}
exports.UpdateCourseResultDto = UpdateCourseResultDto;
//# sourceMappingURL=update-course-result.dto.js.map