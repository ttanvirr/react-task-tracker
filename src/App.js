import { useEffect, useState } from "react";
import AddForm from "./components/AddForm";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import Tasks from "./components/Tasks";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  const [showForm, setForm] = useState(false);
  const [tasks, setTasks] = useState ([]);

  // fetch tasks from server
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    return data;
  }

  // get fetched tasks and set tasks
  useEffect(()=> {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer)
    }
    getTasks();
  }, []);


// add a new task
const onAdd = async task => {      // task receives an object from AddForm component
  // add task into the server
  const res = await fetch("http://localhost:5000/tasks", {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(task)
  });
  const newTask = await res.json();

  // const id = tasks.length + 1;  // POST method automatically put an id
  // const newTask = {id, ...task};

  // add task in ui
  setTasks([...tasks, newTask]);
}

// delete a task
const deleteTask = async id => {       /* id receives task.id from Task component */
  // delete from server
  await fetch(`http://localhost:5000/tasks/${id}`, {
    method: "DELETE"
  });
  // delete from ui
  setTasks( tasks.filter(task => task.id !== id) );
}

// toggle reminder
const toggleReminder = async id => {
  // fetching single task from server which is to toggled
  const res = await fetch(`http://localhost:5000/tasks/${id}`);
  const taskToToggle = await res.json();

  // getting updated task after reminder toggling
  const updatedTask = {...taskToToggle, reminder: !taskToToggle.reminder};
  
  // update task on server
  await fetch(`http://localhost:5000/tasks/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(updatedTask)
  });
  
  // update task in ui
  setTasks(
    tasks.map( task => { 
    return task.id === id ? {...task, reminder: !task.reminder} : task
    })
  )
}

  return (
    <Router>
      <div className="container">
        <Header toggleForm={()=>setForm(!showForm)} toggleAddBtn={showForm} />
        <Route path="/" exact render={(props)=>(
          <>
            {showForm && <AddForm onAdd={onAdd} />}
            {tasks.length > 0 ? (
              <Tasks
                tasks = {tasks} 
                deleteTask={deleteTask}
                toggleReminder = {toggleReminder} 
              />) : "No Task To Show"}
          </>
        )} />
        <Route path="/about" component={About} />
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;