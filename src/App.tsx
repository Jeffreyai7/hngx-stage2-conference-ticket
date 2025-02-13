import './App.css'
import NavBar from './components/NavBar'
import MultiPartForm from './pages/MultiPartForm'
function App() {

  return (
    <main className='bg-(--primaryColor)'>
      <section className=' max-w-[780px] mx-auto'>
      <NavBar/>
      <MultiPartForm/>
      </section>
    </main>
  )
}

export default App
