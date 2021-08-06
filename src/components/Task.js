import { FaTimes } from "react-icons/fa";

const Task = ({task, deleteTask, toggleReminder}) => {

    return (
        <div 
            className={`task ${task.reminder ? "reminder" : ""}`} 
            onDoubleClick = {()=>toggleReminder(task.id)}
        >
            <div>
                <h3>{task.task}</h3>
                <p>{task.date} </p>
            </div>
            <FaTimes 
                style={{color:"red", cursor:"pointer"}}
                onClick={()=>deleteTask(task.id)} />
        </div>
    )
}

export default Task;