import "./modalBtn.css"
import Modal from "./Modal";
import { useState } from "react";

export default function ModalBtn(){
    const [open, setOpen] = useState(false);

    return(
        <>
            <button className="openModal" onClick={()=>setOpen(true)}>Открой меня</button>
            {open && <Modal open={open} setOpen={setOpen} />}
        </>
    );
}