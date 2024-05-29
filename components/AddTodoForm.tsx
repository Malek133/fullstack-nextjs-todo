"use client"

import { Diff } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Dialog, DialogContent, DialogDescription, DialogFooter,
  DialogHeader,DialogTitle, DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

import {Form, FormControl, FormDescription,
   FormField,FormItem, FormLabel,
   FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { TodoFormValues, todoFormSchema } from '@/schema';
import { creatTodoAction } from '@/actions/todo.actions';
import { useState } from 'react';
import Spinner from './Spinner';



const AddTodoForm = () => {

  const [loading,setLoading]=useState(false);
  const [open,setOpen]=useState(false)

    const defaultValues: Partial<TodoFormValues> = {
        title: "",
        body:'',
        completed:false
      }

    const form = useForm<TodoFormValues>({
        resolver: zodResolver(todoFormSchema),
        defaultValues,
        mode: "onChange",
      })
    
     const onSubmit = async ({title,body,completed}:TodoFormValues) =>{
      setLoading(true)
        await creatTodoAction({title,body,completed})
        setLoading(false)
        setOpen(false)
     };



  return (
    <div>
          <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
      <Button>
        <Diff />
        New Todo
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Creat Todo</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. 
            Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className=" py-4">

        <Form  {...form}> 
      <form 
       onSubmit={form.handleSubmit(onSubmit)} 
      className="space-y-8">
        <FormField
           control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name. It can be your 
                real name or a pseudonym. You can only change 
                this once every 30 days.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

            <FormField
           control={form.control}
          name="body"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Short Descreption</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us a little bit about yourself"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                You can <span>@mention</span>
                 other users and organizations to
                link to them.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
     
     <FormField
  control={form.control}
  name="completed"
  render={({ field }) => (
    <FormItem className='flex justify-start items-center space-x-3'>
      
      <FormControl>
        <Checkbox
          {...field} checked={field.value} onCheckedChange={field.onChange}
           value={field.value ? "true" : "false"}
        />
      </FormControl>
      <FormLabel>Completed</FormLabel>
    </FormItem>
  )}
/>


          <DialogFooter>
          <Button type="submit" disabled={loading}>
          {loading ? <Spinner /> : "Save" }
          </Button>
            </DialogFooter>

          </form>
          </Form>
        </div>
        
      </DialogContent>
    </Dialog>
    </div>
  )
}

export default AddTodoForm