
const TicketSelection = () => {
  return (
    <section className="w-[90%] mx-auto h-screen">
      <div>
          <div className="flex justify-between w-[90%] mx-auto items-center my-[32px] text-white">
            <h1 className="text-[24px] md:text-[32px]">Ticket Selection</h1>
            <span className="text-[16px]">step 1/3</span>
          </div>
      </div>
          <div className="progressbar"></div>
      <div>
        <div className="bg-custom-gradient my-[32px] w-[90%] mx-auto  text-white text-center px-6 py-4 md:p-6 border border-[#07373F] rounded-[24px]">
          <div>
            <h1 className="text-[2.5rem] md:text-[3.875rem]">Techember Fest "25</h1>
            <span className="text-[14px]">Join us for an unforgettable experience at [Event Name]! Secure your spot now.</span>
          </div>
          <div>
            <span className="text-[16px]">📍 [Event Location] | | March 15, 2025 | 7:00 PM</span>
          </div>
        </div>

        <div className="w-[90%] h-1 bg-[#07373F] division mx-auto">
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