import { Controller, Get } from '@nestjs/common';
import { PostService } from './service';
import { Post } from './model';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  findAll(): Promise<Post[]> {
    return this.postService.findAll();
  }
}
