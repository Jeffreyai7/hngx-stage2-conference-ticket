
const TicketReady = () => {
  return (
    <section>
      <div>
          <div>
            <h1>Ready</h1>
            <span>step 3/3</span>
          </div>
          <div className="progressbar"></div>
      </div>
      <div>
      {/* ticket header */}
        <div>
        <h2>Your Ticket is Booked!</h2>
        <span>Check your email for a copy or you can download</span>
        </div>
      {/* ticket header end */}
      {/* Main ticket start */}
        <div>
          <div>
            <div>
            <h1>Techember Fest "25</h1>
            <div>
            <span>📍 04 Rumens road, Ikoyi, Lagos</span>
            <span>📅 March 15, 2025 | 7:00 PM</span>
            </div>
            </div>
            <div>
              image
            </div>
            <div>
            <div>
              <div>
                <p>Name:</p>
                <p>{}</p>
              </div>
              <div>
                <p>Email:</p>
                <p>{}</p>
              </div>
              <div>
                <p>Ticket Type:</p>
                <p>{}</p>
              </div>
              <div>
                <p>Ticket for:</p>
                <p>{}</p>
              </div>

            </div>
            <div>
              <p>Special Request</p>
              <p>{}</p>
            </div>
            </div>
          </div>
          <div>
            barcode
          </div>
        </div>
      {/*Main ticket end */}

        {/* button start */}
        <div>
          <button>Book Another Ticket</button>
          <button>Download Ticket</button>
        </div>
        {/* button end */}
      </div>
    </section>
  )
}

export default TicketReady