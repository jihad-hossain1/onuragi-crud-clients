import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import 'font-awesome/css/font-awesome.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  RouterProvider,
} from "react-router-dom";
import router from './routes/Router';



ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='mx-5 md:mx-24'>
    <RouterProvider router={router}></RouterProvider>
  </div>
)