import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "../auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(private authService: AuthService){
        super();
    }

    async validate( title: string, password: string, email: string): Promise<any>{
        const organization = await this.authService.validateOrg(title, password, email);

        if(!organization){
            throw new UnauthorizedException();
        }

        return organization
    }

}