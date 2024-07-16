import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma/prisma/prisma.service';

@Injectable()
export class CategoriesService {
  /**
   * Constructor of CategoriesService
   */
  constructor(private prisma: PrismaService) {}
}
