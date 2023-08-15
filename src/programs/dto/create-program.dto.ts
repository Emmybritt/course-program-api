import { IsNotEmpty, IsIn, IsISO31661Alpha2 } from 'class-validator';

export class CreateProgramDto {
  @IsNotEmpty()
  name: string;

  @IsIn(['undergraduate', 'masters', 'phd'])
  level: 'undergraduate' | 'masters' | 'phd';

  @IsNotEmpty()
  institute: string;

  @IsISO31661Alpha2({
    message:
      'Country must be a valid two-character ISO alpha-2 country code eg ("NG" | "US" ).',
  })
  @IsNotEmpty()
  country: string;

  @IsNotEmpty()
  description: string;
}
