import { ThemeService } from './theme.service';
import { CreateThemeDto } from './dto/create-theme.dto';
import { UpdateThemeDto } from './dto/update-theme.dto';
export declare class ThemeController {
    private readonly themeService;
    constructor(themeService: ThemeService);
    create(createThemeDto: CreateThemeDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateThemeDto: UpdateThemeDto): string;
    remove(id: string): string;
}
