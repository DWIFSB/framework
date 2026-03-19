import { Logger, NotFoundException } from "@nestjs/common";
import { Injectable } from "@nestjs/common/decorators/core/injectable.decorator";

@Injectable()
    export class DeleteTodoRepository{
    constructor(priveity readonly prisma:PrismaServise) {}  
    async execute (string:DeleteTodoDto ){
        return  await this.prisma.todo.Delete( ); 
        }
    }
asyc execute (id:string) {

try {
    this.logger.log('Deleting toDo');

    const todo= await this.findTodoByidRepository.findByid(id);

    if (!todo) {
        throw new NotFoundException('toDo not found');

    }
}
    await this.deleteTodoRepository.delete(id);
    this.logger.log('toDo deleted succe')
    return


}