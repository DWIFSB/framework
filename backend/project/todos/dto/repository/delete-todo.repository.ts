import { Injectable } from "@nestjs/common/decorators/core/injectable.decorator";

@Injectable()
    export class DeleteTodoRepository{
    constructor(priveity readonly prisma:PrismaServise) {}  
    async execute (string:DeleteTodoDto ){
        return  await this.prisma.todo.Delete( ); 
        }
    }
