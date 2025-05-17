import Button from "./Button";
import { FormData } from "../../lib/validation";
import { useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";
import { useRef } from "react";

type Props = {
  formData: FormData;
  imageUrl: string;
  nextStep: () => void;
};

const TicketReady: React.FC<Props> = ({ formData, imageUrl }) => {
  const navigate = useNavigate();

  const ticketRef = useRef<HTMLDivElement>(null); // ref for the ticket element

  const handleDownload = async () => {
    if (ticketRef.current) {
      const canvas = await html2canvas(ticketRef.current);
      const dataUrl = canvas.toDataURL("image/png");

      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "techember-ticket.png";
      link.click();
    }
  };

  return (
    <section className="w-[95%] max-w-[600px] mx-auto">
      <div className="bg-(--primaryColor) z-30 sticky top-[68px] mb-[32px]">
        <div className="flex justify-between w-[90%] mx-auto items-center  text-white">
          <h1 className="text-[24px] md:text-[32px] jeju-text">Ready</h1>
          <span className=" roboto-text text-[16px]">step 3/3</span>
        </div>
        <div className="progress-container">
          <div className="progress-bar3"></div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        {/* ticket header */}
        <div className="text-white text-center w-[90%] mb-3 mx-auto">
          <h2 className="text-[32px]">Your Ticket is Booked!</h2>
          <span className="text-[16px]">
            Check your email for a copy or you can download
          </span>
        </div>
        {/* ticket header end */}
        {/* Main ticket start */}
        <div
          ref={ticketRef} // attach the ref to the ticket element
          className="ticketback flex flex-col justify-center items-center gap-2 w-[300px] h-[600px]"
        >
          <div className="w-[16.25rem] h-[27.8rem] p-2 border-2 border-[#133D44] rounded-[16px]">
            <div className="text-center text-white">
              <h1 className="text-[1.5rem] road-rage-text">
                Techember Fest "25
              </h1>
              <div className="text-[0.625rem] roboto-text">
                <span>📍 04 Rumens road, Ikoyi, Lagos</span>
                <span>📅 March 15, 2025 | 7:00 PM</span>
              </div>
            </div>
            <div className="flex justify-center items-center my-1.5">
              <img
                className="h-[140px] w-[140px] "
                src={imageUrl}
                alt="avatar"
              />
            </div>
            <div className="border border-[#133D44] h-[160px]">
              <div className="grid grid-cols-2 h-[88px] gap-0 w-full p">
                <div className="border border-[#133D44]">
                  <p className="text-[10px] text-white opacity-[33%] p-1">
                    Name:
                  </p>
                  <p className="text-[12px] text-white p-1">
                    {formData.step2.name}
                  </p>
                </div>
                <div className="border border-[#133D44]">
                  <p className="text-[10px]  text-white opacity-[33%] p-1">
                    Email:
                  </p>
                  <p className="text-[12px] text-white p-1">
                    {formData.step2.email}
                  </p>
                </div>
                <div className="border border-[#133D44]">
                  <p className="text-[10px]  text-white opacity-[33%] p-1">
                    Ticket Type:
                  </p>
                  <p className="text-[10px] text-white p-1">
                    {formData.step1.ticket}
                  </p>
                </div>
                <div className="border border-[#133D44]">
                  <p className="text-[10px]  text-white opacity-[33%] p-1">
                    Ticket for:
                  </p>
                  <p className="text-[10px] text-white p-1">
                    {formData.step1.ticketType}
                  </p>
                </div>
              </div>
              <div className="w-[90%] mx-auto">
                <p className="text-[10px]  text-white opacity-[33%] p-1">
                  Special Request
                </p>
                <p className="text-[12px] text-white p-1">
                  {formData.step2.message}
                </p>
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
          <Button
            className="jeju-text flex-1 border border-(--secondaryColor) text-(--secondaryColor) py-6 px-3 text-[16px] rounded-[12px] cursor-pointer"
            onClick={() => {
              console.log("Navigating to /");
              navigate("/");
            }}
          >
            Book Another Ticket
          </Button>
          <Button
            onClick={handleDownload}
            className="jeju-text flex-1 border border-(--secondaryColor) text-white bg-(--secondaryColor) py-6 px-3 text-[16px] rounded-[12px] cursor-pointer"
          >
            Download Ticket
          </Button>
        </div>
        {/* button end */}
      </div>
    </section>
  );
};

export default TicketReady;
