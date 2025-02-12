import Button from "./Button"

const TicketSelection = () => {
  return (
    <section className="w-[90%] mx-auto">
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
          <div className="w-[90%] mx-auto my-6">
            <span className="text-white">Select Ticket Type:</span>
            <div className="flex flex-col mt-2.5 gap-6 md:flex-row text-white">
              <div className="flex-1 h-28 border border-[#197686] rounded-[12px] p-3 flex flex-col cursor-pointer hover:bg-(--hoverColor)"><span className="text-[24px]">Free</span><span className="text-[16px]">Regular Access</span><span className="text-[14px]">20/52</span></div>
              <div className="flex-1 h-28 border border-[#197686] rounded-[12px] p-3 flex flex-col cursor-pointer hover:bg-(--hoverColor)"><span className="text-[24px]">$150</span><span className="text-[16px]">VIP Access</span><span className="text-[14px]">20/52</span></div>
              <div className="flex-1 h-28 border border-[#197686] rounded-[12px] p-3 flex flex-col cursor-pointer hover:bg-(--hoverColor)"><span className="text-[24px]">$150</span><span className="text-[14px]">VVIP Access</span><span className="text-[14px]">20/52</span></div>
            </div>
          </div>
          <div className=" w-[90%] mx-auto flex flex-col gap-3">
            <label className="text-white flex-1" htmlFor="number of tickets">Number of Tickets</label>
            <input className="text-white flex-1 border border-[#07373F] p-3 rounded-[12px]"  type="number" name="tickets" id="number of tickets" />
          </div>
          <div className="flex flex-col w-[90%] gap-3 mt-6 pb-6 mx-auto md:flex-row">
            <Button className="flex-1 border border-(--secondaryColor) text-(--secondaryColor) py-6 px-3 text-[16px] rounded-[12px] cursor-pointer">Cancel</Button>
            <Button className="flex-1 border border-(--secondaryColor) text-white bg-(--secondaryColor) py-6 px-3 text-[16px] rounded-[12px] cursor-pointer">Next</Button>
          </div>

        </div>

      </div>
    </section>
  )
}

export default TicketSelection