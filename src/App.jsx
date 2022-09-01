import React from 'react'
import { Routes, Route } from "react-router-dom";
import Pika from "./components/pika";

export default function App() {
    return (
        <div className="App">
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                        <div className="container">
                            <div className="card">
                                <div className="envelope"></div>
                                <h1>
                                    Ты для меня как <em>CSS</em> для{" "}
                                    <em>HTML</em>
                                </h1>
                                <a className="heart" href="/pika">
                                    {" "}
                                </a>
                            </div>
                        </div>

                        <div className="body__pika__out">
                <div className="container__pika">
                    <div className="envelope__pika"></div>
                    <div className="card__pika">
                        <h1 className="message__pika">Люблю тебя&#10084;</h1>
                        <div className="pikachu__pika">
                            <div className="limbs__pika"></div>
                            <div className="heart__pika"></div>
                            <div className="arms__pika"></div>
                            <div className="smile__pika"></div>
                        </div>
                    </div>
                    <div className="cover__pika"></div>
                    <div className="lid__pika"></div>
                    <div className="shadow__pika"></div>
                </div>
                <a className="heart__pika" href="/">
                    {" "}
                </a>
            </div>
                        </>
                    }
                />
                <Route path="/pika" element={<Pika />} />
            </Routes>
        </div>
    );
}
