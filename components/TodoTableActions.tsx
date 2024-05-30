'use client'
import { Button } from './ui/button'
import { Trash2 } from 'lucide-react';
import { deleteTodoAction } from "@/actions/todo.actions";
import { useState } from "react";
import Spinner from "./Spinner";
import EditTodoForm from './EditTodoForm';
import { ITodo } from '@/interface';

const TodoTableActions = ({todo}:{todo:ITodo}) => {
    const [loading,setLoading]=useState(false)
  return (
    <>
           <EditTodoForm todo={todo} />
          
              <Button  onClick={ async () =>{
                    setLoading(true)
                    await deleteTodoAction({id:todo.id})
                    setLoading(false)
                } 
                }
              variant={'destructive'}>
                {loading ? <Spinner /> : <Trash2 size={16} />}
                </Button>
    </>
  )
}

export default TodoTableActions