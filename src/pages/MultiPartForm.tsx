import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import AttendeeDetails from "../components/AttendeeDetails";
import TicketReady from "../components/TicketReady";
import TicketSelection from "../components/TicketSelection";
import { schema, FormData } from "../../lib/validation";

const MultiPartForm = () => {
  // This is state for the image upload
  const [imageUrl, setImageUrl] = useState<string>("");

  // State for the steps in the multipart form
  const [step, setStep] = useState<number>(() => {
    return Number(localStorage.getItem("currentStep")) || 1;
  });

  // State for the form inputs
  const [formData, setFormData] = useState<FormData>(() => {
    return JSON.parse(localStorage.getItem("formData") || "{}") as FormData;
  });

  const nextStep = () => {
    setStep((prev) => {
      const newStep = prev + 1;
      localStorage.setItem("currentStep", newStep.toString()); // Here the states persist per step
      return newStep;
    });
  };

  const prevStep = () => {
    setStep((prev) => {
      const newStep = prev - 1;
      localStorage.setItem("currentStep", newStep.toString()); // Also when you go back
      return newStep;
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: formData,
  });

  const watchedData = watch();

  useEffect(() => {
    setFormData(watchedData as FormData);
    localStorage.setItem("formData", JSON.stringify(watchedData));
  }, [watchedData]);

  const onSubmit = (data: FormData) => {
    console.log("Final Data Submitted:", data);
    setFormData(data);
    localStorage.removeItem("formData");
    localStorage.removeItem("currentStep");
    setStep(3);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        {step === 1 && (
          <TicketSelection
            register={register}
            errors={errors}
            nextStep={nextStep}
            setValue={setValue}
          />
        )}
        {step === 2 && (
          <AttendeeDetails
            register={register}
            errors={errors}
            prevStep={prevStep}
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
          />
        )}
        {step === 3 && (
          <TicketReady
            formData={formData}
            imageUrl={imageUrl}
            nextStep={nextStep}
          />
        )}
      </form>
    </motion.div>
  );
};

export default MultiPartForm;
