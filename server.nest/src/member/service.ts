import { Injectable, Inject } from '@nestjs/common';
import { Member } from './model';

@Injectable()
export class MemberService {
  constructor(
    @Inject('MEMBER_REPOSITORY') private readonly MEMBER_REPOSITORY: typeof Member) { }

  async findAll(): Promise<Member[]> {
    return await this.MEMBER_REPOSITORY.findAll<Member>();
  }
}