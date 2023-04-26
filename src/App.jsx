import { useState } from 'react'
import './style.css'
function App() {

  const [newItem, setNewItem] = useState('')
  const [todos, setTodos] = useState([])
 
  const handeleSubmit=(e)=>{
    e.preventDefault();
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
    <li>
      <label>
        <input type="checkbox" />
        Item 1
      </label>
      <button className='btn btn-danger'>Delete</button>
    </li>
    <li>
      <label>
        <input type="checkbox" />
        Item 1
      </label>
      <button className='btn btn-danger'>Delete</button>
    </li>
    <li>
      <label>
        <input type="checkbox" />
        Item 1
      </label>
      <button className='btn btn-danger'>Delete</button>
    </li>
   </ul>
  </>
  )
}

export default App
