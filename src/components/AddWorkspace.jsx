import { useState } from "react";

export default function AddWorkspace(props) {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    function onAdd(){
        props.addSpace(name, description)
        setName('')
        setDescription('')
    }

    return (
        <div className="header">
            <input type="text" placeholder="Name" onChange={(event)=>setName(event.target.value)} value={name} />
            <input type="text" placeholder="Description" onChange={(event)=>setDescription(event.target.value)} value={description} />
            <button onClick={onAdd}>Add</button>
        </div>
    );
}
