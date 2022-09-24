"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./auth/auth.module");
const organization_module_1 = require("./public/organization/organization.module");
const theme_module_1 = require("./public/theme/theme.module");
const dead_line_module_1 = require("./public/dead-line/dead-line.module");
const session_module_1 = require("./public/session/session.module");
const state_module_1 = require("./public/state/state.module");
const client_module_1 = require("./organization/client/client.module");
const course_module_1 = require("./organization/course/course.module");
const course_results_module_1 = require("./organization/course-results/course-results.module");
const active_course_module_1 = require("./organization/active-course/active-course.module");
const department_module_1 = require("./organization/department/department.module");
const group_module_1 = require("./organization/group/group.module");
const file_module_1 = require("./organization/file/file.module");
const file_information_module_1 = require("./organization/file-information/file-information.module");
const public_info_module_1 = require("./organization/public-info/public-info.module");
const test_results_module_1 = require("./organization/test-results/test-results.module");
const test_module_1 = require("./organization/test/test.module");
const active_test_module_1 = require("./organization/active-test/active-test.module");
const test_type_module_1 = require("./organization/test-type/test-type.module");
const question_module_1 = require("./organization/question/question.module");
const question_result_module_1 = require("./organization/question-result/question-result.module");
const question_type_module_1 = require("./organization/question-type/question-type.module");
const input_type_module_1 = require("./organization/input-type/input-type.module");
const payment_module_1 = require("./public/payment/payment.module");
const const_entities_1 = require("./constants/const.entities");
const { PORT_DB, USERNAME_DB, PASSWORD_DB, DATABASE_NAME, } = process.env;
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [auth_module_1.AuthModule, typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: Number(PORT_DB),
                username: USERNAME_DB,
                password: PASSWORD_DB,
                database: DATABASE_NAME,
                entities: const_entities_1.entities,
                synchronize: true,
            }), organization_module_1.OrganizationModule, theme_module_1.ThemeModule, payment_module_1.PaymentModule,
            dead_line_module_1.DeadLineModule, session_module_1.SessionModule, state_module_1.StateModule, client_module_1.ClientModule,
            course_module_1.CourseModule, course_results_module_1.CourseResultsModule, active_course_module_1.ActiveCourseModule,
            department_module_1.DepartmentModule, group_module_1.GroupModule, file_module_1.FileModule, file_information_module_1.FileInformationModule,
            public_info_module_1.PublicInfoModule, test_results_module_1.TestResultsModule, test_module_1.TestModule, active_test_module_1.ActiveTestModule,
            test_type_module_1.TestTypeModule, question_module_1.QuestionModule, question_result_module_1.QuestionResultModule,
            question_type_module_1.QuestionTypeModule, input_type_module_1.InputTypeModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map