import { Injectable, Inject } from '@nestjs/common';
import { Comment } from './model';

@Injectable()
export class CommentService {
  constructor(
    @Inject('COMMENT_REPOSITORY') private readonly COMMENT_REPOSITORY: typeof Comment) { }

  async findAll(): Promise<Comment[]> {
    return await this.COMMENT_REPOSITORY.findAll<Comment>();
  }
}