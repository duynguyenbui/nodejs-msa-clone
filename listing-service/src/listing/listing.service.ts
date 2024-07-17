import { Injectable } from '@nestjs/common';
import { CreateListingDto } from 'src/dtos/create-listing.dto';
import { UpdateListingDto } from 'src/dtos/update-listing.dto';
import { PrismaService } from 'src/shared/prisma/prisma/prisma.service';

@Injectable()
export class ListingService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateListingDto) {
    const { idCategory } = data;

    return this.prisma.listing.create({
      data: {
        ...data,
        category: {
          connect: {
            id: idCategory,
          },
        },
      },
    });
  }

  findAll() {
    return this.prisma.listing.findMany({
      include: {
        listingPrice: true,
        category: true,
      },
      where: {},
    });
  }

  findOne(id: number) {
    return this.prisma.listing.findUnique({ where: { id } });
  }

  update(id: number, data: UpdateListingDto) {
    return this.prisma.listing.update({
      where: { id },
      data: data,
    });
  }

  remove(id: number) {
    return this.prisma.listing.delete({ where: { id } });
  }
}
