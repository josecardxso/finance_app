import React from 'react'
import { Route ,Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Error from './components/Error';
import Recover from './components/Recover';

const App = () => {
  return (
    <div>
        <Routes>
            <Route path= '/' element={<Login />} />
            <Route path= '/finance_app' element={<Login />} />
            <Route path= '/login' element={<Login />} />
            <Route path= '/Error' element={<Error />} />
            <Route path= '/Signup' element={<Signup />} />
            <Route path= '/Recover' element={<Recover />}/>
        </Routes>
    </div>
  )
}

export default App