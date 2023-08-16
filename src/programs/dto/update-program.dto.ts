import { PartialType } from '@nestjs/mapped-types';
import { CreateProgramDto } from './create-program.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateProgramDto extends PartialType(CreateProgramDto) {
  @ApiProperty()
  name?: string;

  @ApiProperty()
  level?: 'undergraduate' | 'masters' | 'phd';

  @ApiProperty({
    description: 'Program level (undergraduate, masters, phd)',
    enum: ['undergraduate', 'masters', 'phd'],
  })
  institute?: string;

  @ApiProperty()
  country?: string;

  @ApiProperty()
  description?: string;
}
