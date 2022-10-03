import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { JwtService } from '@nestjs/jwt';
import { Organization } from 'src/public/organization/entities/organization.entity';

@Injectable()
export class AuthService {

  constructor(private jwtService: JwtService){
    this.jwtService.sign({
      dick: "12sm"
    })
  }

  validateOrg(title: string, password: string, email: string){

    
    return true;
  }

  register(createAuthDto: CreateAuthDto) {
  
    
    return `fsadfsadfd ${createAuthDto.email}`;
  }


}
