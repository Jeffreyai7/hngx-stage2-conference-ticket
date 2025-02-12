import Button from "./Button"

const AttendeeDetails = () => {
  return (
    <section>
    <div>
        <div className="flex justify-between w-[90%] mx-auto items-center my-[32px] text-white">
            <h1 className="text-[24px] md:text-[32px]">Attendee Details</h1>
            <span className="text-[16px]">step 2/3</span>
        </div>
    </div>
     <div className="progressbar"></div>
     <div>
        <div className="w-[90%] flex flex-col justify-center  gap-2 mx-auto bg-[#052228] border border-[#07373F] h-[328px] p-3 rounded-[12px]">
            <span className="text-white p text-[16px]">Upload Profile Photo</span>
            <div className="grid place-content-center bg-[#000000] h-[200px]">Image upload</div>
        </div>
        <div className="w-[90%] h-1 bg-[#07373F] division mx-auto my-8"></div>
        <div>
            <div className="w-[90%] mx-auto flex flex-col gap-3">
                <label className="text-white flex-1" htmlFor="name">Enter your name:</label>
                <input className="text-white flex-1 border border-[#07373F] p-3 rounded-[12px]"  type="text" name="name" id="name" />
            </div>
            <div className="w-[90%] mx-auto flex flex-col gap-3">
                <label className="text-white flex-1" htmlFor="email">Enter your email:</label>
                <input className="text-white flex-1 border border-[#07373F] p-3 rounded-[12px]" type="email" name="email" id="email"/>
            </div>
            <div className="w-[90%] mx-auto flex flex-col gap-3">
                <label className="text-white flex-1" htmlFor="textarea">Special request?</label>
                <textarea className="text-white border border-[#07373F] p-3 rounded-[12px] h-[127px]" name="textarea" id="textarea" placeholder="Textarea"></textarea>
            </div>
            <div className="flex flex-col w-[90%] gap-3 mt-6 pb-6 mx-auto md:flex-row">
            <Button className="flex-1 border border-(--secondaryColor) text-(--secondaryColor) py-6 px-3 text-[16px] rounded-[12px] cursor-pointer">Back</Button>
            <Button className="flex-1 border border-(--secondaryColor) text-white bg-(--secondaryColor) py-6 px-3 text-[16px] rounded-[12px] cursor-pointer">Get My Free Ticket</Button>
          </div>
        </div>
     </div>




    </section>
  )
}

export default AttendeeDetails