import { Injectable } from "@nestjs/common/decorators/core";
import { CreateTodoDto } from "../create-todo.dto";

@Injectable()
    export class CreateTodoRepository{
    constructor(readonly prisma:PrismaServise) {}  
    async execute (data:CreateTodoDto ){
        return  await this.prisma.todo.findUnique( );
        }
    }
