
  import { getTodoAction } from '@/actions/todo.actions';
 import AddTodoForm from '@/components/AddTodoForm';

// import { TodoFormValues, todoFormSchema } from '@/schema';

export default async function Home() {



    const todos = await getTodoAction();

  
  return (
    <main className="flex flex-col items-center 
    justify-between p-24">
      

      <AddTodoForm /> 
    
       <div className='container my-7'>
        <ul className='grid grid-cols-4'>
          {todos.map((todo,i) =>(<li key={todo.id} 
          className='text-xl font-medium'>
        {i+1}-{todo.title}</li>))}
        </ul>
      
    </div> 

    </main>
    
  );
}
