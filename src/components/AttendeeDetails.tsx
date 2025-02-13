import Button from "./Button"
import { FormData } from "../../lib/validation";


type Props = {
  register: any;
  errors: any;
  nextStep?: () => void;
  prevStep?: () => void;
  handleSubmit?: any;
  onSubmit?: (data: FormData) => void;
};

const AttendeeDetails: React.FC<Props> = ({ register, errors, prevStep }) => {
  // const [imageUrl, setImageUrl] = useState<string>("/placeholder-image.png"); // Set custom placeholder

   

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
                <input className="text-white flex-1 border border-[#07373F] p-3 rounded-[12px]"  type="text" id="name" {...register("step2.name")} />
                <p>{errors.step2?.name?.message}</p>
            </div>
            <div className="w-[90%] mx-auto flex flex-col gap-3">
                <label className="text-white flex-1" htmlFor="email">Enter your email:</label>
                <input className="text-white flex-1 border border-[#07373F] p-3 rounded-[12px]" type="email" id="email" {...register("step2.email")}/>
                <p>{errors.step2?.email?.message}</p>
            </div>
            <div className="w-[90%] mx-auto flex flex-col gap-3">
                <label className="text-white flex-1" htmlFor="textarea">Special request?</label>
                <textarea className="text-white border border-[#07373F] p-3 rounded-[12px] h-[127px]" id="textarea" placeholder="Textarea"  {...register("step2.message")}></textarea>
                <p>{errors.step2?.message?.message}</p>
            </div>
            <div className="flex flex-col w-[90%] gap-3 mt-6 pb-6 mx-auto md:flex-row">
            <Button className="flex-1 border border-(--secondaryColor) text-(--secondaryColor) py-6 px-3 text-[16px] rounded-[12px] cursor-pointer" onClick={() => prevStep && prevStep()}>Back</Button>
            <Button className="flex-1 border border-(--secondaryColor) text-white bg-(--secondaryColor) py-6 px-3 text-[16px] rounded-[12px] cursor-pointer" type="submit">Get My Free Ticket</Button>
          </div>
        </div>
     </div >




    </section>
  )
}

export default AttendeeDetails