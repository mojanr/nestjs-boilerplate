import { IsNotEmpty, IsString } from "class-validator";
import { IsCronPattern } from "../validator/is-cron-pattern.validator";
import { ApiProperty } from "@nestjs/swagger";

export class ChangeScheduleIntervalDto {

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsCronPattern()
  interval: string
  
}