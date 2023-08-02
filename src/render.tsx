import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost, updateNewPostText} from "./redux/state";
import {BrowserRouter} from "react-router-dom";



export let renderEntireTree =(state:any)=>{
    const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
    root.render(
        <React.StrictMode>
            <BrowserRouter>

                <App
                    state={state}
                     addPost={addPost}
                    updateNewPostText={updateNewPostText}
                />

            </BrowserRouter>
        </React.StrictMode>);

}
reportWebVitals();

