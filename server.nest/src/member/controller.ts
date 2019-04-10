import { Controller, Get } from '@nestjs/common';
import { MemberService } from './service';
import { Member } from './model';

@Controller('member')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @Get()
  findAll(): Promise<Member[]> {
    return this.memberService.findAll();
  }
}
