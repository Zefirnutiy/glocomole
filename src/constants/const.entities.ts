import { ActiveCourse } from "src/organization/active-course/entities/active-course.entity";
import { ActiveTest } from "src/organization/active-test/entities/active-test.entity";
import { Client } from "src/organization/client/entities/client.entity";
import { Course } from "src/organization/course/entities/course.entity";
import { Department } from "src/organization/department/entities/department.entity";
import { Group } from "src/organization/group/entities/group.entity";
import { DeadLine } from "src/public/dead-line/entities/dead-line.entity";
import { Organization } from "src/public/organization/entities/organization.entity";
import { Payment } from "src/public/payment/entities/payment.entity";
import { Session } from "src/public/session/entities/session.entity";
import { State } from "src/public/state/entities/state.entity";
import { Theme } from "src/public/theme/entities/theme.entity";
import { File } from "src/organization/file/entities/file.entity";
import { FileInformation } from "src/organization/file-information/entities/file-information.entity";
import { PublicInfo } from "src/organization/public-info/entities/public-info.entity";
import { Test } from "src/organization/test/entities/test.entity";
import { TestResult } from "src/organization/test-results/entities/test-result.entity";
import { TestType } from "src/organization/test-type/entities/test-type.entity";
import { Question } from "src/organization/question/entities/question.entity";
import { QuestionResult } from "src/organization/question-result/entities/question-result.entity";
import { QuestionType } from "src/organization/question-type/entities/question-type.entity";
import { InputType } from "src/organization/input-type/entities/input-type.entity";


export const entities = [
    Organization, 
    Theme, 
    Payment,
    DeadLine, 
    Session,
    State, 
    Client, 
    Course, 
    ActiveTest, 
    ActiveCourse, 
    Department, 
    Group, 
    File, 
    FileInformation, 
    PublicInfo, 
    Test, 
    TestResult, 
    TestType, Question, 
    QuestionResult,
    QuestionType, 
    InputType
]