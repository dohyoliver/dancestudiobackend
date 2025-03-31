import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CoursesService {
 
  constructor(private readonly db:PrismaService){

  }

  async create(createCourseDto: CreateCourseDto) {
    const courses = await this.db.courses.create({
      data:  createCourseDto 
    });
    return courses;
  }

  findAll() {
    return this.db.courses.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} course`;
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    return `This action updates a #${id} course`;
  }

  remove(id: number) {
    return `This action removes a #${id} course`;
  }
}
