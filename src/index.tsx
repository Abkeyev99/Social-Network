import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from "./redux/state";
import {BrowserRouter} from "react-router-dom";



 let renderEntireTree =()=>{
    const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    store={store}
                    dispatch={store.dispatch.bind(store)}
                />
            </BrowserRouter>
        </React.StrictMode>);
}

store.subscriber(renderEntireTree)
renderEntireTree();