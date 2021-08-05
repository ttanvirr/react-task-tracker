const tasks = [
    {
      id: 1,
      task: "Visit Doctor",
      Date: "4 PM, Thirsday, 06 August, 2021"
    },
    {
      id: 2,
      task: "Family Program",
      Date: "Friday, 07 August, 2021"
    },
    {
      id: 3,
      task: "Business Meeting",
      Date: "10 AM, Sunday, 08 August, 2021"
    }
  ]  

const Tasks = () => {
    return (
        <div>
            {tasks.map(task => (
            <h3>{task.task}</h3>
            ))}
        </div>
    )
}

export default Tasks;