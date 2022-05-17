import {
    IsString,
    Length
} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UserDto {
    @ApiProperty({
        example: "user",
        type: String,
    })
    @IsString({
        message: "Должен быть строкой"
    })
    @Length(4, 20, {
        message: "Не меньше 4 и не больше 20"
    })
    readonly username: string;

    @ApiProperty({
        example: "user",
        type: String,
    })
    @IsString({
        message: "Должен быть строкой"
    })
    @Length(4, 16, {
        message: "Не меньше 4 и не больше 16"
    })
    readonly password: string;
}