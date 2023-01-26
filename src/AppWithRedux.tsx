import React from "react";
import "./App.css";
import {SettingsWithRedux} from "./components/Settings/SettingsWithRedux";
import {CounterWithRedux} from "./components/Counter/CounterWithRedux";

function App() {
    return (
        <div className="App">
            <div className="counter-wrapper">
                <div className='settings'>
                    <SettingsWithRedux />
                </div>
                <div className='counter'>
                    <CounterWithRedux />
                </div>
            </div>
        </div>
    );
}

export default App