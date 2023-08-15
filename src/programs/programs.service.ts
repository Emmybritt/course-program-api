import { Injectable } from '@nestjs/common';
import { CreateProgramDto } from './dto/create-program.dto';
import { UpdateProgramDto } from './dto/update-program.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Program } from 'src/schemas/program.schema';
import { Model } from 'mongoose';
import { SearchProgramDto } from './dto/search-program.dto';

@Injectable()
export class ProgramsService {
  constructor(
    @InjectModel(Program.name) private programModel: Model<Program>,
  ) {}
  async create(createProgramDto: CreateProgramDto): Promise<Program> {
    return new this.programModel(createProgramDto).save();
  }

  async findAll(): Promise<Program[]> {
    return this.programModel.find();
  }

  async findOne(id: string): Promise<Program> {
    return await this.programModel.findById(id);
  }

  async update(id: string, updateProgramDto: UpdateProgramDto) {
    return this.programModel.updateOne({ _id: id }, { $set: updateProgramDto });
  }

  async remove(id: string) {
    return this.programModel.deleteOne({ _id: id });
  }

  async getSearchedTaskWithFilters(
    searchProgramDto: SearchProgramDto,
  ): Promise<Program[]> {
    const { country, description, institute, level, searchText } =
      searchProgramDto;
    const queryBuilder = this.programModel.find();

    if (level) {
      queryBuilder.where('level').equals(level);
    }

    if (institute) {
      queryBuilder.where('institute').equals(institute);
    }

    if (country) {
      queryBuilder.where('country').equals(country);
    }

    if (description) {
      queryBuilder.where('description').equals(description);
    }

    if (searchText) {
      queryBuilder.where({
        $or: [
          { name: { $regex: searchText, $options: 'i' } },
          { description: { $regex: searchText, $options: 'i' } },
        ],
      });
    }

    return queryBuilder.exec();
  }
}
