import { Module } from '@nestjs/common';
import { PostController } from './controller';
import { PostService } from './service';
import { postProviders } from './model';
import { DatabaseModule } from '../database';


@Module({
  imports: [DatabaseModule],
  controllers: [PostController],
  providers: [PostService, ...postProviders],
})
export class PostModule { }