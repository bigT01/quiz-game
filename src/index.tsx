import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Quiz from "./pages/Dashboard/Quiz/quiz";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path={'/'} element={<App/>}>
                  <Route path={'/dashboard'} element={<Dashboard/> }/>
                  <Route path={'/dashboard/quiz/:id'} element={<Quiz/> }/>
              </Route>
              <Route path={'/login'} element={<Login/>} />
          </Routes>
      </BrowserRouter>
      {/*<RouterProvider router={router} />*/}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
