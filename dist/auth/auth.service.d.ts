import { CreateAuthDto } from './dto/create-auth.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private jwtService;
    constructor(jwtService: JwtService);
    validateOrg(title: string, password: string, email: string): boolean;
    register(createAuthDto: CreateAuthDto): string;
}
