import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const getTodoAction = async() =>{
   return  await prisma.todo.findMany()
     
}
export const creatTodoAction = async() =>{}
export const editTodoAction = async() =>{}
export const deleteTodoAction = async() =>{}