import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    return {
      message: 'Welcome to Nest Js Api with type ORM',
    };
  }
}
