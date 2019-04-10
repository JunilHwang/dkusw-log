import { Controller, Get } from '@nestjs/common';
import { CommentService } from './service';
import { Comment } from './model';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Get()
  findAll(): Promise<Comment[]> {
    return this.commentService.findAll();
  }
}
