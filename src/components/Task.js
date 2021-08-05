import { FaTimes } from "react-icons/fa";

const Task = ({task}) => {

    return (
        <div className={`task ${task.reminder ? "reminder" : ""}`}>
            <div>
                <h3>{task.task}</h3>
                <p>{task.date} </p>
            </div>
            <FaTimes style={{color:"red", cursor:"pointer"}} />
        </div>
    )
}

export default Task;