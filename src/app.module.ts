import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { OrganizationModule } from './public/organization/organization.module';
import { ThemeModule } from './public/theme/theme.module';
import { DeadLineModule } from './public/dead-line/dead-line.module';
import { SessionModule } from './public/session/session.module';
import { StateModule } from './public/state/state.module';
import { ClientModule } from './organization/client/client.module';
import { CourseModule } from './organization/course/course.module';
import { CourseResultsModule } from './organization/course-results/course-results.module';
import { ActiveCourseModule } from './organization/active-course/active-course.module';
import { DepartmentModule } from './organization/department/department.module';
import { GroupModule } from './organization/group/group.module';
import { FileModule } from './organization/file/file.module';
import { FileInformationModule } from './organization/file-information/file-information.module';
import { PublicInfoModule } from './organization/public-info/public-info.module';
import { TestResultsModule } from './organization/test-results/test-results.module';
import { TestModule } from './organization/test/test.module';
import { ActiveTestModule } from './organization/active-test/active-test.module';
import { TestTypeModule } from './organization/test-type/test-type.module';
import { QuestionModule } from './organization/question/question.module';
import { QuestionResultModule } from './organization/question-result/question-result.module';
import { QuestionTypeModule } from './organization/question-type/question-type.module';
import { InputTypeModule } from './organization/input-type/input-type.module';
import { PaymentModule } from './public/payment/payment.module';


import { entities } from './constants/const.entities';
// В теории было бы лучше тоже вынести в константы
const {
  PORT_DB,
  USERNAME_DB,
  PASSWORD_DB,
  DATABASE_NAME,
}  = process.env


@Module({
  imports: [AuthModule, TypeOrmModule.forRoot({
    type: 'postgres',
<<<<<<< HEAD
      host: 'localhost',
      port: Number(PORT_DB),
      username: USERNAME_DB,
      password: PASSWORD_DB,
      database: DATABASE_NAME,
      entities,
      synchronize: true,
=======
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'sweet_potato_db',
    entities: [Organization, Theme, Payment, DeadLine, Session,
    State, Client, Course, ActiveTest, ActiveCourse, 
    Department, Group, File, FileInformation, PublicInfo, Test, 
    TestResult, TestType, Question, QuestionResult,
    QuestionType, InputType],
    synchronize: true,
>>>>>>> c40d4ec4383061476433efab7a035d08e4bef0ab
  }), OrganizationModule, ThemeModule, PaymentModule,
   DeadLineModule, SessionModule, StateModule, ClientModule, 
   CourseModule, CourseResultsModule, ActiveCourseModule, 
   DepartmentModule, GroupModule, FileModule, FileInformationModule, 
   PublicInfoModule, TestResultsModule, TestModule, ActiveTestModule, 
   TestTypeModule, QuestionModule, QuestionResultModule, 
   QuestionTypeModule, InputTypeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
