import './App.css';
import Layout from './Layouts/Layout';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import Homepage from './Pages/Homepage';
import DisplayTicket from './Components/DisplayTickets';
import TicketingSystem from './Components/CreateTicket';
import Search from './Components/Search';
import RegistrationPage from './Pages/RegistrationPage';
import LoginPage from './Pages/LoginPage';






const App = () => {
  
const [tickets, setTickets] = useState([])


 
useEffect(() => {
  const URL = process.env.REACT_APP_URL_ENDPOINT
  axios
    .get(`${URL}/tickets/all`)
    .then(function (response) {
      console.log(response);
      setTickets(response.data.tickets);
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
}, []);




const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <LoginPage tickets ={tickets} />,
      },
      {
        path: "ticket",
        element: (
          <DisplayTicket tickets ={tickets}/>
           
        
        ),
      },
      {
        path: "create-ticket",
        element: (
          <TicketingSystem/>
        
        ),
      },
      {
         path: "search",
         element: (
          <Search tickets ={tickets} ticket={tickets.map((item, index) => {
                
            return {item}

       })}/>
         )

      },
      {
        path: "registration",
        element: (
         <RegistrationPage/>
        )

     },
     {
      path: "login",
      element: (
       <Homepage tickets ={tickets}/>
      )

   }
    ],
  },
]);

return (
  <div className="App-header">
    <RouterProvider router={router} />
  </div>
);
}

export default App;
