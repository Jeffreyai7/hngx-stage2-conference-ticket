import './App.css'
import AttendeeDetails from './components/AttendeeDetails'
import NavBar from './components/NavBar'
import TicketSelection from './components/TicketSelection'
function App() {

  return (
    <main>
      <NavBar/>
      <TicketSelection/>
      <AttendeeDetails/>
    </main>
  )
}

export default App
