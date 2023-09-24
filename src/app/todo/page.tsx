import AddTask from '../../components/todo/AddTask'
import TodoList from '../../components/todo/TodoList'
import { getAllTodos } from '@/api'

const ToDo = async () => {
     const tasks = await getAllTodos();

     return (
          <main className="max-w-4xl mx-auto mt-4">
               <div className="text-center my-5 flex flex-col gap-4">
                    <h1 className="text-2xl font-bold mt-20">Todo List App</h1>
                    <AddTask />
               </div>
               <TodoList tasks={tasks} />
          </main>
     )
}

export default ToDo;