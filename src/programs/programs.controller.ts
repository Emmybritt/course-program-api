import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ProgramsService } from './programs.service';
import { CreateProgramDto } from './dto/create-program.dto';
import { UpdateProgramDto } from './dto/update-program.dto';
import { SearchProgramDto } from './dto/search-program.dto';
import { MongoIdValidationPipe } from 'src/shared/pipes/validation.pipe';

@Controller('programs')
export class ProgramsController {
  constructor(private readonly programsService: ProgramsService) {}

  @Post()
  create(@Body() createProgramDto: CreateProgramDto) {
    return this.programsService.create(createProgramDto);
  }

  @Get()
  findAll(@Query() searchProgramDto: SearchProgramDto) {
    if (Object.keys(searchProgramDto).length >= 1) {
      return this.programsService.getSearchedProgramsWithFilters(
        searchProgramDto,
      );
    }
    return this.programsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', MongoIdValidationPipe) id: string) {
    return this.programsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', MongoIdValidationPipe) id: string,
    @Body() updateProgramDto: UpdateProgramDto,
  ) {
    return this.programsService.update(id, updateProgramDto);
  }

  @Delete(':id')
  remove(@Param('id', MongoIdValidationPipe) id: string) {
    return this.programsService.remove(id);
  }
}
