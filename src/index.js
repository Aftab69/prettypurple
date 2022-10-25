import React from 'react';
import { hydrate, render } from "react-dom";
import './index.css';
import App from './App';
import Context from './Context';
import { BrowserRouter } from "react-router-dom";

const APP = (
    <Context>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Context>
)
const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(APP, rootElement);
} else {
  render(APP, rootElement);
}