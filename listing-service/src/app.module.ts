import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './shared/prisma/prisma/prisma.module';
import { CategoriesModule } from './categories/categories.module';
import { ListingModule } from './listing/listing.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    PrismaModule,
    CategoriesModule,
    ListingModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
