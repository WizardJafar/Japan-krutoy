import { Outlet } from 'react-router-dom'
import Groups from './components/Groups'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <>
      <header >
        <Navbar />
      </header>
      <main className='flex gap-11 container'>
        <Sidebar />
        <Groups />
        <Outlet />
      </main>
    </>
  )
}

export default App
