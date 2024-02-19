import React, {useState} from 'react';
import './App.scss';
import Login from "./Login";
import {Navigate} from "react-router-dom";

function App() {
    const [isLogined, setIslogined] = useState(false)


    return (
        <div className='App'>
            <Navigate to={'/login'}/>
        </div>
    );
}

export default App;
