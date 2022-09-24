"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateActiveCourseDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_active_course_dto_1 = require("./create-active-course.dto");
class UpdateActiveCourseDto extends (0, mapped_types_1.PartialType)(create_active_course_dto_1.CreateActiveCourseDto) {
}
exports.UpdateActiveCourseDto = UpdateActiveCourseDto;
//# sourceMappingURL=update-active-course.dto.js.map