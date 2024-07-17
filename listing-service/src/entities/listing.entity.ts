import { Listing, Prisma } from '@prisma/client';

export class ListingEntity implements Listing {
  id: number;
  name: string;
  description: string;
  firstPic: string;
  createdAt: Date;
  createdBy: number;
  updatedAt: Date;
  updatedBy: number;
  capacity: Prisma.JsonValue;
  categoryId: number;

  constructor(partial: Partial<ListingEntity>) {
    if (partial) {
      Object.assign(this, partial);
    }
  }
}
