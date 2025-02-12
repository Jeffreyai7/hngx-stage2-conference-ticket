import './App.css'
import AttendeeDetails from './components/AttendeeDetails'
import NavBar from './components/NavBar'
import TicketReady from './components/TicketReady'
import TicketSelection from './components/TicketSelection'
function App() {

  return (
    <main className='bg-(--primaryColor)'>
      <NavBar/>
      <TicketSelection/>
      {/* <AttendeeDetails/> */}
      {/* <TicketReady/> */}
    </main>
  )
}

export default App
