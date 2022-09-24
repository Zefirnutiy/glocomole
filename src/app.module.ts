import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { Organization } from './public/organization/entities/organization.entity';
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
import { Theme } from './public/theme/entities/theme.entity';
import { Payment } from './public/payment/entities/payment.entity';
import { DeadLine } from './public/dead-line/entities/dead-line.entity';
import { Session } from './public/session/entities/session.entity';
import { State } from './public/state/entities/state.entity';
import { Client } from './organization/client/entities/client.entity';
import { Course } from './organization/course/entities/course.entity';
import { ActiveTest } from './organization/active-test/entities/active-test.entity';
import { ActiveCourse } from './organization/active-course/entities/active-course.entity';
import { Department } from './organization/department/entities/department.entity';
import { Group } from './organization/group/entities/group.entity';
import { File } from './organization/file/entities/file.entity';
import { FileInformation } from './organization/file-information/entities/file-information.entity';
import { PublicInfo } from './organization/public-info/entities/public-info.entity';
import { TestResult } from './organization/test-results/entities/test-result.entity';
import { Test } from './organization/test/entities/test.entity';
import { TestType } from './organization/test-type/entities/test-type.entity';
import { Question } from './organization/question/entities/question.entity';
import { QuestionResult } from './organization/question-result/entities/question-result.entity';
import { QuestionType } from './organization/question-type/entities/question-type.entity';
import { InputType } from './organization/input-type/entities/input-type.entity';

@Module({
  imports: [AuthModule, TypeOrmModule.forRoot({
    type: 'postgres',
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
