import React, { createContext, useState } from 'react';
export const AppContext = createContext();
const AppProvider = ({ children }) => {
    const [app, setApp] = useState({});
    const saveApp = data => {
        console.log("Context: saveApp valor", data);
        console.log("Context: saveApp atual", app);
        setApp({ ...app, ...data });
        console.log("Context: Depois da mudança", app)
    }

    //LEVEL
    const [level, setLevel] = useState('');
    const saveLevel = data =>{
        console.log("SaveLevel")
        setLevel(data);
    }
    //TIMER
    const [timer, setTimer] = useState('stop');
    const saveTimer = data=>{
        console.log("SaveTimer")
        setTimer(data);
    }
    //ROUND
    const [round, setRound] = useState(1);
    const saveRound = data =>{
        console.log("SaveRound")
        setRound(data);
    }
    //RESULT
    const [result, setResult]= useState([]);
    const saveResult = data =>{
        //setResult(result => [...result, data]);
        setResult(data);
    }
    const providers = {app, saveApp, level, saveLevel, timer, saveTimer, round, saveRound, result, saveResult}
    return (
        <AppContext.Provider value={providers}>
            {children}
        </AppContext.Provider>
    )
}
export default AppProvider;