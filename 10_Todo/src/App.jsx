import { useState,useEffect } from 'react'

import { useTodo,TodoContext } from './contexts/TodoContext'
import TodoForm from './components/Todoform'
import TodoItem from './components/Todoitem'
import { TodoProvider } from './contexts/TodoContext'
function App() {
  const [todos, setTodos] = useState([])

  const addTodo =(todo)=>{
  setTodos((prev)=>[{id: Date.now(),...todo},...prev])
  }
  const updateTodo =(id,todo)=>{
    setTodos((prev)=>prev.map((prevtodo)=>(prevtodo.id===id?todo:prevtodo)))
    
  }
  const deleteTodo =(id)=>{
    setTodos((prev)=>prev.filter(todo =>todo.id!==id))
  }
 
  

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevtodo) =>
        prevtodo.id === id ? { ...prevtodo, completed: !prevtodo.completed } : prevtodo
      )
    );
  };
  
   useEffect(() => {
   const todos=JSON.parse(localStorage.getItem("todos"))

   if(todos&&todos.length>0){
    setTodos(todos)
   }
   }, [])
   useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
   },[todos])


  return (
    <TodoProvider value={{todos,addTodo,updateTodo,toggleComplete,deleteTodo}}>
      
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        
                    </div>
                    <TodoForm/>
                    <div >
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
  <TodoItem key={todo.id} todo={todo} />
))}

                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
