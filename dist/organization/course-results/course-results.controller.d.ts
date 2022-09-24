import { CourseResultsService } from './course-results.service';
import { CreateCourseResultDto } from './dto/create-course-result.dto';
import { UpdateCourseResultDto } from './dto/update-course-result.dto';
export declare class CourseResultsController {
    private readonly courseResultsService;
    constructor(courseResultsService: CourseResultsService);
    create(createCourseResultDto: CreateCourseResultDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateCourseResultDto: UpdateCourseResultDto): string;
    remove(id: string): string;
}
