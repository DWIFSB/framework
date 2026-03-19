import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.databases";
import { CreateTodoDto } from "../create-todo.dto";

@Injectable()
    export class CreateTodoRepository{
    create: any;
    constructor(private readonly prisma: PrismaService) {}  
    }

    async execute (data: CreateTodoDto) {
        return  await this.prisma.todo.create({ data });
    }

    //   return  await this.prisma.todo.create({ data }) significa prisma crie dados para mim em todo  