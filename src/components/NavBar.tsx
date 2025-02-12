import Button from "./Button"
import { ArrowRight } from "lucide-react";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center bg-(--primaryColor) h-[68px] md:h-[76px] px-2">
        <div className="flex">
            <img src="/images/thumb.png" alt="logo"/>
            <img src="/images/ticz.png" alt="ticz" />
        </div>
        <div className="hidden md:flex justify-between items-center gap-4 text-[#B3B3B3] transition-all ">
            <span className="hover:text-white cursor-pointer">Events</span>
            <span className="hover:text-white cursor-pointer">My Tickets</span>
            <span className="hover:text-white cursor-pointer">About Project</span>
        </div>
        <div>
            <Button className="bg-white text-[14px] flex items-center px-[1em] py-[0.75em] rounded-[10px] text-[#0A0C11] hover:bg-(--secondaryColor) hover:text-white cursor-pointer transition-colors">MY TICKET <ArrowRight size={24}/></Button>
        </div>
    </nav>
  )
}

export default NavBar