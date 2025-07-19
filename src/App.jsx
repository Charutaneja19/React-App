import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from './LoginPage'
import list from './list';
import { Routes, Route , Link , useNavigate} from 'react-router-dom';
import HomePage from './HomePage'
function App() {
const userData = [
        {
            id: 1,
            name: 'Charu',
            email: 'charutaneja02@gmail.com',
            password: 'charu123',
            role: 'User',
        },
        {
            id: 2,
            name: 'Priya',
            email: 'Priyasethi02@gmail.com',
            password: 'Priya123',
            role: 'Admin',
        },
        {
            id: 3,
            name: 'Riya',
            email: 'Riya01@gmail.com',
            password: 'Riya123',
            role: 'Manager',
        },
        {
            id: 4,
            name: 'Shreya',
            email: 'Shreya01@gmail.com',
            password: 'Shreya123',
            role: 'User',
        },
        {
            id: 5,
            name: 'Shweta',
            email: 'Shweta02@gmail.com',
            password: 'Shweta123',
            role: 'User',
        }
    ];
    localStorage.setItem('userData',JSON.stringify(userData));
    const navigate = useNavigate();
  return (
    <>
     {/* <button onClick = {() => { navigate('/login')}}>Login</button> */}
     {/* <Link to = '/login'>Login</Link> */}

      <Routes>
  
        <Route path = '/'  element = {<LoginPage></LoginPage>}></Route>
        <Route path = '/home/:role' element = {<HomePage></HomePage>}></Route>
      </Routes>
      <list/>
    </>
  )
}

export default App
