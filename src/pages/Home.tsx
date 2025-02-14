import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-(--primaryColor) flex flex-col justify-center items-center">
      <div className="bg-custom-gradient my-[32px] w-[95%] max-w-[800px] mx-auto  text-white text-center px-6 py-4 md:p-6 border border-[#07373F] rounded-[24px]">
        <div>
          <h1 className="text-[2.5rem] md:text-[3.875rem] road-rage-text">
            Techember Fest "25
          </h1>
          <span className="text-[14px] roboto-text ">
            Join us for an unforgettable experience at [Event Name]! Secure your
            spot now.
          </span>
        </div>
        <div>
          <span className="text-[16px] roboto-text">
            📍 [Event Location] | | March 15, 2025 | 7:00 PM
          </span>
        </div>
      </div>
      <div>
        <Button
          onClick={() => navigate("/form")}
          className="jeju-text flex-none w-28 border border-(--secondaryColor) text-white bg-(--secondaryColor) py-6 px-3 text-[16px] rounded-[12px] cursor-pointer"
        >
          Get Tickets
        </Button>
      </div>
    </div>
  );
};

export default Home;
