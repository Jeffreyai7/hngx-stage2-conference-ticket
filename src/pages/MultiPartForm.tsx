import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import AttendeeDetails from '../components/AttendeeDetails'
import TicketReady from '../components/TicketReady'
import TicketSelection from '../components/TicketSelection'
import {schema, FormData} from "../../lib/validation"

const MultiPartForm = () => {
  const [imageUrl, setImageUrl] = useState<string>("/placeholder-image.png"); // Set custom placeholder
  
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>(() => {
    return JSON.parse(localStorage.getItem("formData") || '{}') as FormData;
   });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1)

    const {
      register,
      handleSubmit,
      formState: { errors },
      setValue
    } = useForm({
      resolver: zodResolver(schema),
      defaultValues: formData,
    });
    
    // const watchedData = watch();

    // useEffect(() => {
    //   setFormData(watchedData as FormData);
    //   localStorage.setItem("formData", JSON.stringify(watchedData));
    // }, [watchedData]);
  
    const onSubmit = (data: FormData) => {
      console.log("Final Data Submitted:", data);
    setFormData(data);
    localStorage.removeItem("formData");
    setStep(3);
    };
  

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
      {step === 1 && <TicketSelection register={register} errors={errors} nextStep={nextStep} setValue={setValue} />}
      {step === 2 && <AttendeeDetails register={register} errors={errors} prevStep={prevStep} nextStep={nextStep} imageUrl={imageUrl} setImageUrl={setImageUrl} />}
      {step === 3 && <TicketReady formData={formData} imageUrl={imageUrl} />}
      {/* {<TicketReady formData={formData} imageUrl={imageUrl} />} */}
    </form>
    </motion.div>
  )
}

export default MultiPartForm