import { Repository } from 'typeorm';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import { Session } from './entities/session.entity';
export declare class SessionService {
    private readonly sessionRepository;
    constructor(sessionRepository: Repository<Session>);
    create(createSessionDto: CreateSessionDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateSessionDto: UpdateSessionDto): string;
    remove(id: number): string;
}
