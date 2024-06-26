
import {
    Table,TableBody,TableCaption,TableCell,TableFooter,
    TableHead,TableHeader,TableRow,
  } from "@/components/ui/table"

import { ITodo } from "@/interface";
import { X ,Check } from 'lucide-react';

import TodoTableActions from "./TodoTableActions";
  
  
  export default function TodoTable({todos}:{todos:ITodo[]}) {

    
    return (
      <Table  className="container">
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead >N:</TableHead> 
            <TableHead>Title</TableHead>
            <TableHead>Descreption</TableHead>
            <TableHead>Completed</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {todos.map((todo,i) => (
            <TableRow key={todo.id}>
              <TableCell className="font-medium">{i+1}</TableCell>
              <TableCell>{todo.title}</TableCell>
              <TableCell>{todo.body}</TableCell>
              <TableCell>{todo.completed ? <Check /> : <X />}</TableCell>
              <TableCell className="text-right">

              <div className="flex gap-3 justify-end items-center">
              <TodoTableActions todo={todo} />
                </div>
                
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">{todos.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    )
  }
  