import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './Components/Homepage.jsx';
import Registion_Login from './Components/Registion_Login.jsx';
import AskQustion from './Components/AskQustion.jsx';
import User_Profile from './Components/User_Profile.jsx';
import Qustion from './Components/Qustion.jsx';
import Qustions from './Components/Qustions.jsx';
import './index.css';
import SearchByTag from './Components/SearchByTag.jsx';
import store from './store/store.js';
import { Provider } from 'react-redux';
import Your_Qustions from './Components/Your_Qustions.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Homepage />,
      },
      {
        path: '/registration',
        element: <Registion_Login />,
      },
      {
        path: '/askquestion',
        element: <AskQustion />,
      },
      {
        path: '/userprofile',
        element: <User_Profile />,
      },
      {
        path: '/qustions',
        element: <Qustions />,
      },
      {
        path: '/qustion/:id',
        element: <Qustion />,
      },
      {
        path: '/your-questions/:id',
        element: <Your_Qustions />,
      },
      {
        path: '/seetags',
        element: <SearchByTag />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
