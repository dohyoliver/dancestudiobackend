import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateCourseDto {
    @IsString()
    @IsNotEmpty()
    name:string;
    @IsInt()
    @IsNotEmpty()
    length:number;
    @IsString()
    @IsNotEmpty()
    type:string;
    @IsString()
    @IsNotEmpty()
    instructor:string;

}
