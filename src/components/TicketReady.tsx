import Button from "./Button"
import {FormData} from "../../lib/validation"


type Props = {
  formData: FormData,
  imageUrl: string
}


const TicketReady:React.FC<Props> = ({formData, imageUrl}) => {


  return (
    <section className="w-[90%] mx-auto">
      <div className="bg-(--primaryColor) z-30 sticky top-[68px]">
        <div className="flex justify-between w-[90%] mx-auto items-center my-[32px] text-white">
            <h1 className="text-[24px] md:text-[32px]">Ready</h1>
            <span className="text-[16px]">step 3/3</span>
        </div>
    </div>
          <div className="progressbar"></div>
      <div className="flex flex-col justify-center items-center">
      {/* ticket header */}
        <div className="text-white text-center w-[90%] mb-3 mx-auto">
        <h2 className="text-[32px]">Your Ticket is Booked!</h2>
        <span className="text-[16px]">Check your email for a copy or you can download</span>
        </div>
      {/* ticket header end */}
      {/* Main ticket start */}
        <div className="ticketback flex flex-col justify-center items-center gap-2 w-[300px] h-[600px]">
          <div className="w-[16.25rem] h-[27.8rem] p-2 border-2 border-[#133D44] rounded-[16px]">
            <div className="text-center text-white">
            <h1 className="text-[1.5rem]">Techember Fest "25</h1>
            <div className="text-[0.625rem]">
            <span>📍 04 Rumens road, Ikoyi, Lagos</span>
            <span>📅 March 15, 2025 | 7:00 PM</span>
            </div>
            </div>
            <div className="h-[140px] w-[140px]">
              <img src={imageUrl} alt="avatar" />
            </div>
            <div className="border border-[#133D44] h-[160px]">
            <div className="grid grid-cols-2 h-[88px] gap-0 w-full p">
              <div className="border border-[#133D44]">
                <p className="text-[10px] text-white opacity-[33%] p-1">Name:</p>
                <p className="text-[12px] text-white p-1">{formData.step2.name}</p>
              </div>
              <div className="border border-[#133D44]">
                <p className="text-[10px]  text-white opacity-[33%] p-1">Email:</p>
                <p className="text-[12px] text-white p-1">{formData.step2.email}</p>
              </div>
              <div className="border border-[#133D44]">
                <p className="text-[10px]  text-white opacity-[33%] p-1">Ticket Type:</p>
                <p className="text-[10px] text-white p-1">{formData.step1.ticket}</p>
              </div>
              <div className="border border-[#133D44]">
                <p className="text-[10px]  text-white opacity-[33%] p-1">Ticket for:</p>
                <p className="text-[10px] text-white p-1">{formData.step1.ticketType}</p>
              </div>

            </div>
            <div className="w-[90%] mx-auto">
              <p className="text-[10px]  text-white opacity-[33%] p-1">Special Request</p>
              <p className="text-[12px] text-white p-1">{formData.step2.message}</p>
            </div>
            </div>
          </div>
          <div>
            <img src="images/Group.png" alt="barcode" />
          </div>
        </div>
      {/*Main ticket end */}

        {/* button start */}
        <div className="flex flex-col w-[90%] gap-3 mt-6 pb-6 mx-auto md:flex-row">
            <Button className="flex-1 border border-(--secondaryColor) text-(--secondaryColor) py-6 px-3 text-[16px] rounded-[12px] cursor-pointer">Book Another Ticket</Button>
            <Button className="flex-1 border border-(--secondaryColor) text-white bg-(--secondaryColor) py-6 px-3 text-[16px] rounded-[12px] cursor-pointer">Download Ticket</Button>
          </div>
        {/* button end */}
      </div>
    </section>
  )
}

export default TicketReady