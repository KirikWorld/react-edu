import { useState } from "react";
import "./counter.css";

export default function Counter() {
    const [count, setCount] = useState(0);

    const onPlus = () => {
        setCount(count + 1);
    };

    const onMinus = () => {
        if (count > 0) setCount(count - 1);
    };

    const reset = () => {
        setCount(0);
    }

    return (
        <div className="counter">
            <h2 className="title">Счетчик:</h2>
            <h1>{count}</h1>
            <div className="container">
                <button onClick={onMinus} className="minus">- Убавить</button>
                <button onClick={onPlus} className="plus">+ Прибавить</button>
            </div>
            <button onClick={reset}>Сбросить</button>
        </div>
    );
}
