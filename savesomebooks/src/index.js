import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/styles/index.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./routes/books.js"
import Favorites from "./routes/favorites.js"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div><Home/></div>}/>
        <Route path='/favorites' element={<div><Favorites/></div>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

