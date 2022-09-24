import { CreateCourseResultDto } from './dto/create-course-result.dto';
import { UpdateCourseResultDto } from './dto/update-course-result.dto';
export declare class CourseResultsService {
    create(createCourseResultDto: CreateCourseResultDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateCourseResultDto: UpdateCourseResultDto): string;
    remove(id: number): string;
}
