
const TicketSelection = () => {
  return (
    <section>
      <div>
        <div>
          <h1>Ticket Selection</h1>
          <span>step 1/3</span>
          </div>
          <div className="progressbar"></div>
      </div>
      <div>
        <div>
          <div>
            <h1>Techember Fest "25</h1>
            <span>Join us for an unforgettable experience at [Event Name]! Secure your spot now.</span>
          </div>
          <div>
            <span>📍 [Event Location] | | March 15, 2025 | 7:00 PM</span>
          </div>
        </div>

        <div className="division">
        </div>

        <div>
          <div>
            <span>Select Ticket Type:</span>
            <div>
              <div><span>Free</span><span>Regular Access</span><span>20/52</span></div>
              <div><span>$150</span><span>VIP Access</span><span>20/52</span></div>
              <div><span>$150</span><span>VVIP Access</span><span>20/52</span></div>
            </div>
          </div>
          <div>
            <span>Number of Tickets</span>
            <p>drop down</p>
          </div>
          <div>
            <button>Cancel</button>
            <button>Next</button>
          </div>

        </div>

      </div>
    </section>
  )
}

export default TicketSelection