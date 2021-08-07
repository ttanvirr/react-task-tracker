import { useState } from "react";

const AddForm = ({onAdd}) => {
    const [task, setTask] = useState("");
    const [date, setDate] = useState("");
    const [reminder, setReminder] = useState(false);

    const addTask = e => {
        e.preventDefault();
        if(!task) {
            alert("Please add a task");
            return;
        }
        // Calling onAdd() function from App.js which adds new task
        onAdd({task, date, reminder});
        // Clear fields on sumit
        setTask("");
        setDate("");
        setReminder(false);
    }

    return (
            <form className="add-form" onSubmit={addTask}>
                <div className="form-control">
                    <label>New Task</label>
                    <input 
                        type="text" 
                        value={task}
                        placeholder="Type a new task"
                        onChange={e=>setTask(e.target.value)} />
                </div>
                <div className="form-control">
                    <label>Date & Time</label>
                    <input 
                        type="text" 
                        value={date}
                        placeholder="Set a date and time"
                        onChange={e=>setDate(e.target.value)} />
                </div>
                <div className="form-control form-control-check">
                    <label>Set Reminder</label>
                    <input 
                        type="checkbox"
                        checked={reminder}
                        onChange={e=>setReminder(e.currentTarget.checked)} />
                </div>
                <input type="submit" value="Save Task" className="btn btn-block" />
            </form>
    )
}

export default AddForm;