import { CreateThemeDto } from './dto/create-theme.dto';
import { UpdateThemeDto } from './dto/update-theme.dto';
export declare class ThemeService {
    create(createThemeDto: CreateThemeDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateThemeDto: UpdateThemeDto): string;
    remove(id: number): string;
}
