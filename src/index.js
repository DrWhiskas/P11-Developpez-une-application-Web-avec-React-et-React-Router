import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home'
import Logements from './pages/Logements';
import About from './pages/About'
import Error from './pages/Error';
import reportWebVitals from './reportWebVitals';
import  "../src/index.css"


import { BrowserRouter, Routes, Route } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/About" element={<About />} />
				<Route path="/localisation/:id" element={<Logements />} />
				<Route path='*' element={<Error />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
