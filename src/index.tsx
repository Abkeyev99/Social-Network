import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {store} from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";


const root=ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
let renderEntireTree = () => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    state={store.getState()}
                    dispatch={store.dispatch.bind(store)}
                    store={store}
                />
            </BrowserRouter>
        </React.StrictMode>);
}

store.subscriber(renderEntireTree)
renderEntireTree();