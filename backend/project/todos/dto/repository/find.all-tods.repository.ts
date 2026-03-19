import { Injectable } from "@nestjs/common/decorators/core/injectable.decorator";

@Injectable()
    export class FindTodoRepository{
    constructor(priveity readonly prisma:PrismaServise) {}  
    async execute (id:FindTodoDto ){
        return  await this.prisma.todo.findMany( );
        
        where: {id},
        
        
    }
