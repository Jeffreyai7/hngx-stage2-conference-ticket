import Button from "./Button"
import {FormData} from "../../lib/validation"




const TicketReady:React.FC<{ formData: FormData }> = ({formData}) => {


  return (
    <section className="w-[90%] mx-auto">
      <div className="bg-(--primaryColor) z-30 sticky top-[68px]">
        <div className="flex justify-between w-[90%] mx-auto items-center my-[32px] text-white">
            <h1 className="text-[24px] md:text-[32px]">Ready</h1>
            <span className="text-[16px]">step 3/3</span>
        </div>
    </div>
          <div className="progressbar"></div>
      <div>
      {/* ticket header */}
        <div className="text-white text-center w-[90%] mb-3 mx-auto">
        <h2 className="text-[32px]">Your Ticket is Booked!</h2>
        <span className="text-[16px]">Check your email for a copy or you can download</span>
        </div>
      {/* ticket header end */}
      {/* Main ticket start */}
        <div className="ticketback w-[300px] h-[600px]">
          <div className="w-[16.25rem] p-2">
            <div className="text-center text-white">
            <h1 className="text-[1.5rem]">Techember Fest "25</h1>
            <div className="text-[0.625rem]">
            <span>📍 04 Rumens road, Ikoyi, Lagos</span>
            <span>📅 March 15, 2025 | 7:00 PM</span>
            </div>
            </div>
            <div className="h-[140px] w-[140px]">
              image
            </div>
            <div className="border border-[#133D44]">
            <div className="grid grid-cols-2 h-[88px] gap-0 w-[90%] mx-auto">
              <div className="border border-[#133D44]">
                <p className="text-[10px] text-white opacity-[33%] p-1">Name:</p>
                <p className="text-[12px] text-white ">{formData.step2.name}</p>
              </div>
              <div className="border border-[#133D44]">
                <p className="text-[10px]  text-white opacity-[33%] p-1">Email:</p>
                <p className="text-[12px] text-white">{formData.step2.email}</p>
              </div>
              <div className="border border-[#133D44]">
                <p className="text-[10px]  text-white opacity-[33%] p-1">Ticket Type:</p>
                <p className="text-[12px] text-white">{formData.step1.ticket}</p>
              </div>
              <div className="border border-[#133D44]">
                <p className="text-[10px]  text-white opacity-[33%] p-1">Ticket for:</p>
                <p className="text-[12px] text-white">{formData.step1.ticketType}</p>
              </div>

            </div>
            <div className="w-[90%] mx-auto">
              <p className="text-[10px]  text-white opacity-[33%] p-1">Special Request</p>
              <p className="text-[12px] text-white">{formData.step2.message}</p>
            </div>
            </div>
          </div>
          <div>
            barcode
          </div>
        </div>
      {/*Main ticket end */}

        {/* button start */}
        <div className="flex flex-col w-[90%] gap-3 mt-6 pb-6 mx-auto md:flex-row">
            <Button className="flex-1 border border-(--secondaryColor) text-(--secondaryColor) py-6 px-3 text-[16px] rounded-[12px] cursor-pointer">Back</Button>
            <Button className="flex-1 border border-(--secondaryColor) text-white bg-(--secondaryColor) py-6 px-3 text-[16px] rounded-[12px] cursor-pointer">Get My Free Ticket</Button>
          </div>
        {/* button end */}
      </div>
    </section>
  )
}

export default TicketReady