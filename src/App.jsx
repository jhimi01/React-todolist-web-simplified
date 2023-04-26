import { useState } from 'react'
import './style.css'
function App() {

  const [newItem, setNewItem] = useState('')
  const [todos, setTodos] = useState([])
 
  const handeleSubmit=(e)=>{
    e.preventDefault();
    setTodos((currentTodos)=>{
      return [
        ...currentTodos, {
          id: crypto.randomUUID(), title: newItem, complete: false
        }
      ]
    })
    setNewItem('')
  }

  const toggleTodo=(id, complete)=>{
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id == id) {
          return {...todo, complete}
        }
        return todo
      })
    })
  }

  const deleteTodo=(id, complete)=>{
    setTodos(currentTodos => {
      return currentTodos.filter(todo => {
        if (todo.id !== id) {
          return{...todo, complete}
        }
      });
    })
  }

  return (
  <>
     <form onSubmit={handeleSubmit} className='new-item-form'>
   <div className="form-row">
   <label htmlFor='item'>New Item</label>
    <input type="text" value={newItem} onChange={(e)=>{setNewItem(e.target.value)}} id="item"  />
   </div>
   <button className='btn'>Add</button>
   </form>
   <h1 className="header">To do list</h1>
   <ul className="list">
   {todos.map(todo =>  <li key={todo.id}>
      <label>
        <input type="checkbox" checked={todo.complete} onChange={e => toggleTodo(todo.id, e.target.checked)}/>
        {todo.title}
      </label>
      <button onClick={()=>{deleteTodo(todo.id)}} className='btn btn-danger'>Delete</button>
    </li>)}
  
   </ul>
  </>
  )
}

export default App
