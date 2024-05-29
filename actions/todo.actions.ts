'use server'

import { TodoFormValues } from "@/schema";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient()

export const getTodoAction = async () =>{
   return  await prisma.todo.findMany()
     
}
export const creatTodoAction = async ({title,body,completed}
    :TodoFormValues) =>{
    await prisma.todo.create({
        data:{
            title,
            body,
            completed
        },
    })
    revalidatePath('/')
}
export const deleteTodoAction = async({id}:{id:string}) =>{
    await prisma.todo.delete({
        where:{
            id,
        }
    })
    revalidatePath('/')
}
export const editTodoAction = async() =>{}
