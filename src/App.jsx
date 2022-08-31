import React, { useState } from "react";
import AddWorkspace from "./components/AddWorkspace";
import WorkSpace from "./components/WorkSpace";

let spaces = [];

export default function App() {
    const [workspaces, setWorkspaces] = useState(spaces);

    function addSpace(Name, Description) {
        if (workspaces[0]!=null) {
            setWorkspaces([
                ...workspaces,
                {
                    id: workspaces.at(-1).id + 1,
                    name: Name,
                    description: Description,
                    tasks: [],
                },
            ]);
        }else{
            setWorkspaces([
                ...workspaces,
                {
                    id: 0,
                    name: Name,
                    description: Description,
                    tasks: [],
                },
            ]);
        }
    }

    return (
        <div className="App">
            <AddWorkspace addSpace={addSpace} />
            {workspaces.map((value) => (
                <WorkSpace
                    tasks={value}
                    key={value.id}
                    setWs={setWorkspaces}
                    ws={workspaces}
                />
            ))}
        </div>
    );
}
