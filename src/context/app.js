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
    const [level, setLevel] = useState('');
    const saveLevel = data =>{
        console.log("SaveLevel")
        setLevel(data);
    }
    const [result, setResult]= useState([]);
    const saveResult = data =>{
        setResult(data);
    }
    const [status, setStatus] = useState("stop");
    const saveStatus = data => {
        setStatus(data);
    }
    const providers = {app, saveApp, level, saveLevel, result, saveResult, status, saveStatus}
    return (
        <AppContext.Provider value={providers}>
            {children}
        </AppContext.Provider>
    )
}
export default AppProvider;