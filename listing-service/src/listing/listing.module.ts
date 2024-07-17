import { Module } from '@nestjs/common';
import { ListingController } from './listing.controller';
import { ListingService } from './listing.service';
import { PrismaModule } from 'src/shared/prisma/prisma/prisma.module';

@Module({
  controllers: [ListingController],
  providers: [ListingService],
  imports: [PrismaModule],
})
export class ListingModule {}
