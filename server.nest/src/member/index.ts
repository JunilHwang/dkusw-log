import { Module } from '@nestjs/common';
import { MemberController } from './controller';
import { MemberService } from './service';
import { memberProviders } from './model';
import { DatabaseModule } from '../database';


@Module({
  imports: [DatabaseModule],
  controllers: [MemberController],
  providers: [MemberService, ...memberProviders],
})
export class MemberModule { }