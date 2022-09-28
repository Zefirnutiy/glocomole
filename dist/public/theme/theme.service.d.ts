import { Repository } from 'typeorm';
import { CreateThemeDto } from './dto/create-theme.dto';
import { UpdateThemeDto } from './dto/update-theme.dto';
import { Theme } from './entities/theme.entity';
export declare class ThemeService {
    private readonly orgRepository;
    constructor(orgRepository: Repository<Theme>);
    create(createThemeDto: CreateThemeDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateThemeDto: UpdateThemeDto): string;
    remove(id: number): string;
}
