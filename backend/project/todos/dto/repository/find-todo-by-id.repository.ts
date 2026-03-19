import { Injectable } from "@nestjs/common/decorators";

@Injectable()
    export class CreateTodoRepository{
    constructor(priveity readonly prisma:PrismaServise) {}  
    async execute (id:FindTodoDto ){
        return  await this.prisma.todo.findUnique( );
        }
    }
