import { useState } from "react";
import Tasks from "./Tasks";

export default function WorkSpace(props) {
    const [open, setOpen] = useState(false);
    return (
        <div className="workSpace" onClick={() => setOpen(true)}>
            <h1>{props.tasks.name}</h1>
            <p>{props.tasks.description}</p>
            {open && <Tasks tasks={props.tasks.tasks} toOpen={setOpen} setWs={props.setWs} ws={props.ws} id={props.tasks.id} />}
        </div>
    );
}
