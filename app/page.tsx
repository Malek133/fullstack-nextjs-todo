
  import { getTodoAction } from '@/actions/todo.actions';
 import AddTodoForm from '@/components/AddTodoForm';
import TodoTable from '@/components/TodoTable';


export default async function Home() {



    const todos = await getTodoAction();

  
  return (
    <main className="flex flex-col items-center 
    justify-between p-24">

      <AddTodoForm /> 

    <TodoTable todos={todos} />

    </main>
    
  );
}
