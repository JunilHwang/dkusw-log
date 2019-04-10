import { Injectable, Inject } from '@nestjs/common';
import { Post } from './model';

@Injectable()
export class PostService {
  constructor(
    @Inject('POST_REPOSITORY') private readonly POST_REPOSITORY: typeof Post) { }

  async findAll(): Promise<Post[]> {
    return await this.POST_REPOSITORY.findAll<Post>();
  }
}