import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from 'src/dtos/create-category.dto';
import { UpdateCategoryDto } from 'src/dtos/update-category.dto';
import { CategoryEntity } from 'src/entities/category.entity';
import { PrismaService } from 'src/shared/prisma/prisma/prisma.service';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  /**
   * Creates a new category using the provided data.
   *
   * @param {CreateCategoryDto} data - The data used to create the category.
   * @return {Promise<Category>} A promise that resolves to the created category.
   */
  create(data: CreateCategoryDto) {
    return this.prisma.category.create({ data });
  }

  /**
   * Find all categories.
   *
   * @return {Promise<Category[]>} All categories found
   */
  findAll() {
    return this.prisma.category.findMany();
  }

  /**
   * Retrieves a single category by its ID.
   *
   * @param {number} id - The ID of the category to retrieve.
   * @return {Promise<Category | null>} A promise that resolves to the category with the given ID, or null if not found.
   */
  findOne(id: number) {
    return this.prisma.category.findUnique({ where: { id } });
  }

  /**
   * Updates a category with the specified ID using the provided data.
   *
   * @param {number} id - The ID of the category to update.
   * @param {UpdateCategoryDto} data - The data used to update the category.
   * @return {Promise<Category>} A promise that resolves to the updated category.
   */
  update(id: number, data: UpdateCategoryDto) {
    return this.prisma.category.update({
      where: { id },
      data: new CategoryEntity({ ...data }),
    });
  }

  /**
   * Deletes a category by its ID.
   *
   * @param {number} id - The ID of the category to delete.
   * @return {Promise<Category>} A promise that resolves to the deleted category.
   */
  remove(id: number) {
    return this.prisma.category.delete({ where: { id } });
  }
}
