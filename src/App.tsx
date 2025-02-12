import './App.css'
import AttendeeDetails from './components/AttendeeDetails'
import NavBar from './components/NavBar'
import TicketReady from './components/TicketReady'
import TicketSelection from './components/TicketSelection'
function App() {

  return (
    <main className='bg-(--primaryColor)'>
      <section className='max-w-[700px] mx-auto'>
      <NavBar/>
      {/* <TicketSelection/> */}
      <AttendeeDetails/>
      {/* <TicketReady/> */}
      </section>
    </main>
  )
}

export default App
