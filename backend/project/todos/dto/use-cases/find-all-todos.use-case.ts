import { Injectable } from "@nestjs/common/decorators/core/injectable.decorator";
import { Logger } from "@nestjs/common/services/logger.service";
import { CreateTodoDto } from "../create-todo.dto";


@Injectable()
    export class CreateTodoRepository{
    create: any;
    constructor(priveity readonly prisma:PrismaServise) {}  
    }

    async execute ( ) {
        return  await this.prisma.todo.findMany( );
    }

    
    @Injectable ()
    export class FindTodoUseCase {
        constructor(
            private readonly FindTodoRepository: FindTodoUseCase,
            private readonly logger: Logger, 
        )
     {} 
    
    async execute(data: CreateTodoDto){
    try {
       this.logger.log('Ctreating toDo...');
       const todo =await this.FindTodoRepository.create(data);
       this.logger.log('ToDo created successfully');
       return todo; 
    } catch (error) {
        this.logger.error(error);
        throw new Error('Failed to create toDo')
     }
     }
     }