import { Module } from '@nestjs/common';
import { CategoryModule } from './category';

@Module({
  imports: [ CategoryModule ]
})
export class AppModule {}
