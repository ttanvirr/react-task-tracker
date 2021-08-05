import { useState } from "react";
import Task from "./Task";

const Tasks = () => {
    const [tasks, setTasks] = useState(
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
    return (
        <div className="tasks">
            {tasks.map(task => (
                <Task key = {task.id} task = {task} />
            ))}
        </div>
    )
}

export default Tasks;