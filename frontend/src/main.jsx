import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import store from './store/store.js';
import { Provider } from 'react-redux';
import './index.css';
import {
  HomePage,
  RegistrationLogin,
  AskQuestion,
  UserProfile,
  Questions,
  Question,
  YourQuestions,
  SearchByTag,

} from "./Components"
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/registration',
        element: <RegistrationLogin />,
      },
      {
        path: '/askquestion',
        element: <AskQuestion />,
      },
      {
        path: '/userprofile',
        element: <UserProfile />,
      },
      {
        path: '/qustions',
        element: <Questions />,
      },
      {
        path: '/qustion/:id',
        element: <Question />,
      },
      {
        path: '/your-questions/:id',
        element: <YourQuestions />,
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
