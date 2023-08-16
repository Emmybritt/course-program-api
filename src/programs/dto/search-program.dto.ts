import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class SearchProgramDto {
  @ApiProperty({
    description: 'Program level (undergraduate, masters, phd)',
    enum: ['undergraduate', 'masters', 'phd'],
    required: false,
  })
  level?: 'undergraduate' | 'masters' | 'phd';

  @ApiProperty({ description: 'Institute name', required: false })
  @IsOptional()
  institute?: string;

  @ApiProperty({
    description: 'Country code (2 characters long, e.g., NG, US)',
    pattern: '[A-Za-z]{2}',
    required: false,
  })
  @IsOptional()
  country?: string;

  @ApiProperty({ description: 'Program name or description', required: false })
  @IsOptional()
  searchText?: string;
}
