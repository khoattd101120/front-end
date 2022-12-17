import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RequireAuth from './components/Auth/RequireAuth'
import Login from './components/Auth/Login'
import MainLayout from './components/Layout/MainLayout'
import Register from './components/Auth/Register'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='linkpage' element={<Login />} />
        <Route path='unauthorized' element={<Login />} />


        <Route element={<RequireAuth />} >
          <Route path='/' element={<Login />} />
          {/* <Route path='' element={<Login />} />
          <Route path='' element={<Login />} />
          <Route path='' element={<Login />} /> */}
        </Route>

        {/* <Route path='*' element={<Missing />} /> */}
      </Route>
    </Routes>
  )
}

export default App