const Task = ({task}) => {
    console.log(task);
    return (
        <div>
            <h3>{task.task}</h3>
            <h4>{task.date}</h4>
        </div>
    )
}

export default Task;