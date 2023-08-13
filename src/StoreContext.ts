import React from 'react';
import {store} from "./redux/redux-store";

type StoreContextType = {
    store:any
}

const StoreContext = React.createContext(null)

export const Provider = (props: StoreContextType) => {
    return <StoreContext.Provider value={store}>
        {props.children}
        </StoreContext.Provider>}


export default StoreContext