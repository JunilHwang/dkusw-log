import { Module } from '@nestjs/common';
import { CategoryModule } from './category';
import { PostModule } from './post';
import { MemberModule } from './member';
import { CommentModule } from './comment';

@Module({
  imports: [ CategoryModule, PostModule, MemberModule, CommentModule ]
})
export class AppModule {}
