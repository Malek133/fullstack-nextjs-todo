
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { Button } from "./ui/button"
import { Pencil,Trash2 } from 'lucide-react';
import { ITodo } from "@/interface";
import { Badge } from "@/components/ui/badge"
  
  
  export default function TodoTable({todos}:{todos:ITodo[]}) {
    return (
      <Table  className="container">
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead >ID</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Completed</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {todos.map((todo) => (
            <TableRow key={todo.id}>
              <TableCell className="font-medium">{todo.id}</TableCell>
              <TableCell>{todo.title}</TableCell>
              <TableCell>{todo.completed ? <Badge>Completed</Badge> : <Badge variant={'secondary'}>Uncompleted</Badge>}</TableCell>
              <TableCell className="text-right">
              <div className="flex gap-3 justify-end items-center">
                <Button  ><Pencil size={16}/></Button>
              <Button  variant={'destructive'}>
                <Trash2 size={16} /></Button>
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
  