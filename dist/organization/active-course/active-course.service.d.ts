import { CreateActiveCourseDto } from './dto/create-active-course.dto';
import { UpdateActiveCourseDto } from './dto/update-active-course.dto';
export declare class ActiveCourseService {
    create(createActiveCourseDto: CreateActiveCourseDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateActiveCourseDto: UpdateActiveCourseDto): string;
    remove(id: number): string;
}
