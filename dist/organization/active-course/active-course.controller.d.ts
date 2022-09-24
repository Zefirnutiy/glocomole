import { ActiveCourseService } from './active-course.service';
import { CreateActiveCourseDto } from './dto/create-active-course.dto';
import { UpdateActiveCourseDto } from './dto/update-active-course.dto';
export declare class ActiveCourseController {
    private readonly activeCourseService;
    constructor(activeCourseService: ActiveCourseService);
    create(createActiveCourseDto: CreateActiveCourseDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateActiveCourseDto: UpdateActiveCourseDto): string;
    remove(id: string): string;
}
