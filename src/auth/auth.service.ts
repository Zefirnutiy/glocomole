import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

  constructor(private jwtService: JwtService){
    this.jwtService.sign({
      dick: "12sm"
    })
  }

  create(createAuthDto: CreateAuthDto) {
    return `title - ${createAuthDto.title} with email - ${createAuthDto.email}`;
  }


}
