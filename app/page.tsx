
  import { getUserTodoAction } from '@/actions/todo.actions';
 import AddTodoForm from '@/components/AddTodoForm';
import TodoTable from '@/components/TodoTable';
import { auth } from '@clerk/nextjs/server';


export default async function Home() {

  const {userId} = auth()
  

    const todos = await getUserTodoAction({userId});

  
  return (
    <main className="flex flex-col items-center 
    justify-between p-24">

      <AddTodoForm userId={userId} /> 

    <TodoTable todos={todos} />

    </main>
    
  );
}
