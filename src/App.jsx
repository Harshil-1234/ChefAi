import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className='min-h-screen'>
      <Header />

      {/* <main className="bg-amber-100 min-h-screen m-0 p-0"> */}
      <main>
        <Outlet />
      </main>

    </div>
  )
}

export default App