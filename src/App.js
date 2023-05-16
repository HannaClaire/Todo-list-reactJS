import { useState } from 'react';
import './App.css';


//============================================================


function App() {


const [tasks, setTasks] = useState([
  {id:1, name: "Water plants", priority : true},
  {id:2, name: "Go shopping", priority : false},
  {id:3, name: "Make dinner", priority : true}
])

const [newTask, setNewTask] = useState("")

//============================================================

const listOfTasks = tasks.map((task) => {
  return(
    <li className={task.priority? "high" : "low"} key = 
    {task.id}>{task.name}
    {/* <button className={task.priority? "high" : "low"}></button> */}
  <button onClick={() => deleteTask(task.id)}> Task Done</button>
    </li>
  )
})

const deleteTask = (parameterThatTakesInAnId) => {
  console.log("Delete button clicked", parameterThatTakesInAnId)
    
const newTasks = tasks.filter((task) => task.id !== parameterThatTakesInAnId)
setTasks(newTasks)
}


const handleTaskInput = (event) => {
  setNewTask(event.target.value)
}

const saveNewTask = (event) => {
  event.preventDefault()

const newTaskObj = {id: Date.now(), name : newTask}
const nextTasks = [... tasks, newTaskObj]
setTasks(nextTasks)
setNewTask("")

}



//============================================================

  return (
    <div className="App">
    <h1>Tasks Tae Be Done</h1>

    <hr></hr>
    <ul></ul>
    {listOfTasks}


  <form onSubmit={saveNewTask}>
    <label htmlFor='new-task'>Add a new Task</label>
    <input id='new-task' type='text' value={newTask} onChange={handleTaskInput}/>
    <input type='submit' value="Save New Task"/>
  </form>

  </div>
  );
}

export default App;
