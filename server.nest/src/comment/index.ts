import { Module } from '@nestjs/common';
import { CommentController } from './controller';
import { CommentService } from './service';
import { commentProviders } from './model';
import { DatabaseModule } from '../database';


@Module({
  imports: [DatabaseModule],
  controllers: [CommentController],
  providers: [CommentService, ...commentProviders],
})
export class CommentModule { }