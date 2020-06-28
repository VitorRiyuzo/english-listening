import React, { createContext, useState } from 'react';
export const AppContext = createContext();
const AppProvider = ({ children }) => {
    const [app, setApp] = useState({});
    const saveApp = data => {
        setApp({ ...app, ...data });
    }
    return (
        <AppContext.Provider value={{ app, saveApp }}>
            {children}
        </AppContext.Provider>
    )
}
export default AppProvider;