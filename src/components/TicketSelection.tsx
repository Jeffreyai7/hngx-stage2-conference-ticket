import { useRef, useState } from "react";
import Button from "./Button";

type Props = {
  register: any;
  errors: any;
  nextStep?: () => void;
  prevStep?: () => void;
  watch: any; // from react-hook-form
  trigger?: any;
  handleSubmit?: any;
  setValue: any; // from react-hook-form
};

const TicketSelection: React.FC<Props> = ({
  register,
  nextStep,
  errors,
  setValue,
  trigger,
  watch,
}) => {
  const ticketTypeRef = useRef<HTMLDivElement>(null);
  const ticketNumberRef = useRef<HTMLSelectElement>(null);

  const selectedTicket = watch("step1.ticketType");

  const handleSelectTicket = async (type: string) => {
    setValue("step1.ticketType", type, { shouldValidate: true });
    await trigger("step1.ticketType");
  };

  const handleNext = async () => {
    const isValid = await trigger(["step1.ticket", "step1.ticketType"]);
    if (isValid && nextStep) {
      nextStep();
    } else {
      // scroll to the first error field
      if (errors.step1?.ticketType && ticketTypeRef.current) {
        ticketTypeRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      } else if (errors.step1?.ticket && ticketNumberRef.current) {
        ticketNumberRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }
  };
  const ticketOptions = [
    { type: "Free", label: "Regular Access", price: "Free" },
    { type: "VIP", label: "VIP Access", price: "$150" },
    { type: "VVIP", label: "VVIP Access", price: "$150" },
  ];

  return (
    <section className="w-[95%] max-w-[600px] mx-auto">
      <div className="bg-(--primaryColor) z-30 sticky top-[68px] mb-[32px]">
        <div className="flex justify-between w-[90%] mx-auto items-center  text-white">
          <h1 className="text-[24px] jeju-text md:text-[32px]">
            Ticket Selection
          </h1>
          <span className="text-[16px] roboto-text">step 1/3</span>
        </div>
        <div className="progress-container">
          <div className="progress-bar1"></div>
        </div>
      </div>
      <div className="border border-[#07373F] rounded-[24px] p-0.5">
        <div className="bg-custom-gradient my-[32px] w-[90%] mx-auto  text-white text-center px-6 py-4 md:p-6 border border-[#07373F] rounded-[24px]">
          <div>
            <h1 className="text-[2.5rem] md:text-[3.875rem] road-rage-text">
              Techember Fest "25
            </h1>
            <span className="text-[14px] roboto-text ">
              Join us for an unforgettable experience at [Event Name]! Secure
              your spot now.
            </span>
          </div>
          <div>
            <span className="text-[16px] roboto-text">
              📍 [Event Location] | | March 15, 2025 | 7:00 PM
            </span>
          </div>
        </div>

        <div className="w-[90%] h-1 bg-[#07373F] division mx-auto"></div>

        <div>
          <div className="w-[90%] mx-auto my-6">
            <span className="text-white roboto-text">Select Ticket Type:</span>
            <div
              ref={ticketTypeRef}
              className="flex flex-col mt-2.5 gap-6 bg-[#052228] max-w-[556px] p-2 border border-[#197686] rounded-[12px] md:flex-row text-white"
            >
              {ticketOptions.map((ticket) => (
                <div
                  key={ticket.type}
                  onClick={() => handleSelectTicket(ticket.type)}
                  className={`${
                    selectedTicket === ticket.type
                      ? "bg-(--selectColor)"
                      : "hover:bg-(--hoverColor)"
                  } flex-1 h-28 border border-[#197686] rounded-[12px] p-3 flex flex-col cursor-pointer`}
                >
                  <span className="text-[24px] font-semibold roboto-text">
                    {ticket.price}
                  </span>
                  <span className="text-[16px] roboto-text">
                    {ticket.label}
                  </span>
                  <span className="text-[14px] roboto-text">20/52</span>
                </div>
              ))}
            </div>
            {errors.step1?.ticketType && (
              <p className="text-red-500 text-sm">
                {errors.step1.ticketType.message}
              </p>
            )}
          </div>

          {/* Ticket Quantity */}
          <div className="roboto-text w-[90%] mx-auto flex flex-col gap-3">
            <label htmlFor="number of tickets" className="text-white">
              Number of Tickets
            </label>
            <select
              ref={ticketNumberRef}
              className="text-white w-full border border-[#07373F] p-3 rounded-[12px]"
              id="number of tickets"
              {...register("step1.ticket")}
            >
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <option
                  key={num}
                  className="text-white bg-[#07373F]"
                  value={num}
                >
                  {num}
                </option>
              ))}
            </select>
            {errors.step1?.ticket && (
              <p className="text-red-500 text-sm">
                {errors.step1.ticket.message}
              </p>
            )}
          </div>
          <div className="flex flex-col w-[90%] gap-3 mt-6 pb-6 mx-auto md:flex-row">
            <Button className="jeju-text flex-1 border border-(--secondaryColor) text-(--secondaryColor) py-6 px-3 text-[16px] rounded-[12px] cursor-pointer">
              Cancel
            </Button>
            <Button
              className="jeju-text flex-1 border border-(--secondaryColor) text-white bg-(--secondaryColor) py-6 px-3 text-[16px] rounded-[12px] cursor-pointer"
              onClick={handleNext}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TicketSelection;
