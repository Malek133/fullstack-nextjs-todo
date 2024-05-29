'use client'
import { Button } from './ui/button'
import { Pencil,Trash2 } from 'lucide-react';
import { deleteTodoAction } from "@/actions/todo.actions";
import { useState } from "react";
import Spinner from "./Spinner";

const TodoTableActions = ({id}:{id:string}) => {
    const [loading,setLoading]=useState(false)
  return (
    <>
          <Button ><Pencil size={16}/></Button>
          
              <Button  onClick={ async () =>{
                    setLoading(true)
                    await deleteTodoAction({id})
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