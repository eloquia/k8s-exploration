import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import axios from 'axios';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  async getEvent(@Req() request: Request) {
    console.log('request: ', request.body)
    await axios({
      method: 'post',
      url: 'http://localhost:8001/',
      data: request.body,
    })
  }
}
