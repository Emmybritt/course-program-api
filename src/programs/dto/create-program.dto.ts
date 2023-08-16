import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsIn, IsISO31661Alpha2 } from 'class-validator';

export class CreateProgramDto {
  @ApiProperty({ description: 'Program Name' })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Program level (undergraduate, masters, phd)',
    enum: ['undergraduate', 'masters', 'phd'],
  })
  @IsIn(['undergraduate', 'masters', 'phd'])
  level: 'undergraduate' | 'masters' | 'phd';

  @ApiProperty({ description: 'Institute name' })
  @IsNotEmpty()
  institute: string;

  @ApiProperty({
    description: 'Country code (2 characters long, e.g., NG, US)',
    pattern: '[A-Z]{2}',
  })
  @IsISO31661Alpha2({
    message:
      'Country must be a valid two-character ISO alpha-2 country code eg ("NG" | "US" ).',
  })
  @IsNotEmpty()
  country: string;

  @ApiProperty({ description: 'Program/Course Description' })
  @IsNotEmpty()
  description: string;
}
