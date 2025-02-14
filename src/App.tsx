import { RouterProvider } from "react-router-dom";
import './App.css'
import NavBar from './components/NavBar'
import { router } from "./services/routes";
function App() {

  return (
    <main className='bg-(--primaryColor)'>
      <section className=' max-w-[780px] mx-auto'>
      <NavBar/>
      <RouterProvider router={router} />
      </section>
    </main>
  )
}

export default App
