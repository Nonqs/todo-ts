import { useState } from 'react'
import './App.css'
import { Todos } from './components/Todos'
import { type TodoIdComplete, type TodoId } from './types'
import { type FilterValue, TODO_FILTERS } from './const'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { type TodoTitle } from "./types"

const mockTodos = [
  {
    id: "1",
    title: "Todo 1",
    completed: false
  },
  {
    id: "2",
    title: "Todo 2",
    completed: false
  },
  {
    id: "3",
    title: "Todo 3",
    completed: false
  }
]

function App(): JSX.Element {

  const [todos, setTodos] = useState(mockTodos)
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

  const handleRemove = ({id} : TodoId) =>{
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleted = ({id, completed}: TodoIdComplete): void =>{

    const newTodos = todos.map(todo => {
      if ( todo.id === id){
        return{
          ...todo,
          completed
        }
      }

      return todo
    })

    setTodos(newTodos)

  }

  const handleFilterChange = (filter: FilterValue): void =>{
    setFilterSelected(filter)
  }

  const handleRemoveAllCompleted = () =>{
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }

  const handleAddTodo = ({title}: TodoTitle): void =>{
    const newTodo = {
      title,
      id: crypto.randomUUID(),
      completed: false
    }

    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
  }

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount

  const filteredTodos = todos.filter(todo =>{
    if(filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if(filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  return (
    <div className='todoapp'>
      <Header
        onAddTodo={handleAddTodo}
      />
      <Todos 
      onToggleCompleteTodo={handleCompleted}
      todos={filteredTodos}
      onRemoveTodo = {handleRemove} />
      <Footer 
      activeCounts={activeCount}
      completedCount={completedCount}
      filterSelected={filterSelected}
      onClearCompleted={handleRemoveAllCompleted}
      handleFilterChange={handleFilterChange}
      />
    </div>
  )
}

export default App
