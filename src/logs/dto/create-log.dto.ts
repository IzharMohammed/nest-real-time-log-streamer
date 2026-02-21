import {
    IsIn,
    IsString
} from "class-validator"
export class CreateLogDto {
    @IsString()
    message: string;

    @IsString()
    @IsIn(['info', 'warn', 'error'])
    level: string;
}