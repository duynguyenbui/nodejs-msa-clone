import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './shared/prisma/prisma/prisma.module';
import { CategoriesModule } from './categories/categories/categories.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.development',
    }),
    PrismaModule,
    CategoriesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
