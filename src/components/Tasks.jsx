import { useEffect, useState } from "react";

export default function Tasks(props) {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState(props.tasks);
    const [open, setOpen] = useState(true);

    document.addEventListener('click', (e)=>{
        if(e.target.className === "tasks-container"){
            setOpen(false)
        }
    })

    useEffect(() => {
        props.toOpen(open);
    }, [open]);

    return (
        <div className="tasks-container">
            <input
                type="text"
                onChange={(e) => setTask(e.target.value)}
                value={task}
            />
            <button
                onClick={() => {
                    setTask("");
                    setTasks([...tasks, task]);
                    props.ws[props.id].tasks.push(task)
                }}
            >
                Add
            </button>
            <ul>
                {tasks.map((value) => (
                    <li key={value}>{value}</li>
                ))}
            </ul>
            <button className="close" onClick={() => setOpen(false)}>
                Exit
            </button>
        </div>
    );
}
