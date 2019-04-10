import { Controller, Get } from '@nestjs/common';
import { CategoryService } from './service';
import { Category } from './model';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  findAll(): Promise<Category[]> {
    return this.categoryService.findAll();
  }
}
