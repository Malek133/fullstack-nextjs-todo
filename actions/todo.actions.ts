'use server'

import { TodoFormValues } from "@/schema";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const getTodoAction = async() =>{
   return  await prisma.todo.findMany()
     
}
export const creatTodoAction = async ({title,body}:TodoFormValues) =>{
    await prisma.todo.create({
        data:{
            title,
            body
        },
    })
}
export const editTodoAction = async() =>{}
export const deleteTodoAction = async() =>{}