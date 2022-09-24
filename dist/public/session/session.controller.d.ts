import { SessionService } from './session.service';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
export declare class SessionController {
    private readonly sessionService;
    constructor(sessionService: SessionService);
    create(createSessionDto: CreateSessionDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateSessionDto: UpdateSessionDto): string;
    remove(id: string): string;
}
