import { IsOptional } from 'class-validator';

export class SearchProgramDto {
  level: 'undergraduate' | 'masters' | 'phd';

  @IsOptional()
  institute: string;

  @IsOptional()
  country: string;

  @IsOptional()
  description: string;

  @IsOptional()
  searchText: string;
}
