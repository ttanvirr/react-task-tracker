import { useState } from "react";
import AddForm from "./components/AddForm";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [showForm, setForm] = useState(false);
  const [tasks, setTasks] = useState (
    [
        {
          id: 1,
          task: "Visit Doctor",
          date: "4 PM, Thirsday, 06 August, 2021",
          reminder: true
        },
        {
          id: 2,
          task: "Family Program",
          date: "Friday, 07 August, 2021",
          reminder: true
        },
        {
          id: 3,
          task: "Business Meeting",
          date: "10 AM, Sunday, 08 August, 2021",
          reminder: false
        }
      ]  
);

const deleteTask = id => {       /* id receives task.id from Task component */
  setTasks( tasks.filter(task => task.id !== id) );
}

const toggleReminder = id => {
  setTasks(
    tasks.map( task => { 
    return task.id === id ? {...task, reminder: !task.reminder} : task
    })
  )
}

const onAdd = task => {      // task receives an object from AddForm component
  const id = tasks.length + 1;
  const newTask = {id, ...task};
  setTasks([...tasks, newTask]);
}

  return (
    <div className="container">
      <Header toggleForm={()=>setForm(!showForm)} toggleAddBtn={showForm} />
      {showForm && <AddForm onAdd={onAdd} />}
      <Tasks
        tasks = {tasks} 
        deleteTask={deleteTask}
        toggleReminder = {toggleReminder} 
      />
    </div>
  );
}

export default App;