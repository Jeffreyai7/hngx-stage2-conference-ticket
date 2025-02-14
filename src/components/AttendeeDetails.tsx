import Button from "./Button";
import { FormData as FormDatum } from "../../lib/validation";
import { useEffect, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { TbCloudDownload } from "react-icons/tb";

type Props = {
  register: any;
  errors: any;
  nextStep?: () => void;
  prevStep?: () => void;
  handleSubmit?: any;
  onSubmit?: (data: FormDatum) => void;
  setImageUrl: (data: string) => void;
  imageUrl: string;
};

const AttendeeDetails: React.FC<Props> = ({
  register,
  errors,
  prevStep,
  imageUrl,
  setImageUrl,
}) => {
  useEffect(() => {
    // Load Cloudinary script
    const script = document.createElement("script");
    script.src = "https://upload-widget.cloudinary.com/global/all.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "ybesroqu");

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/dkz10mn2q/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      setImageUrl(data.secure_url);
    } catch (error) {
      console.error("Upload failed", error);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: false,
  });

  return (
    <section className="w-[90%] max-w-[600px] mb-2 mx-auto">
      <div className="bg-(--primaryColor) z-30 sticky top-[68px] my-[32px] mb-[32px]">
        <div className="flex justify-between w-[90%] mx-auto items-center  text-white">
          <h1 className="text-[24px] md:text-[32px] jeju-text">
            Attendee Details
          </h1>
          <span className="text-[16px] roboto-text">step 2/3</span>
        </div>
        <div className="progress-container">
          <div className="progress-bar2"></div>
        </div>
      </div>
      <div className=" bg-[#052228] border border-[#07373F] py-6 rounded-[12px]">
        <div>
          <div className="w-[90%] max-w-[556px] flex flex-col justify-center roboto-text  gap-2 mx-auto bg-[#052228] border border-[#07373F] h-[328px] p-3 rounded-[12px]">
            <span className="text-white mb-3 text-[16px]">
              Upload Profile Photo
            </span>
            <div
              {...getRootProps()}
              className="grid place-content-center bg-black  h-[200px]"
            >
              <input {...getInputProps()} />
              {isDragActive ? (
                <p className="text-white">Drop the image here...</p>
              ) : (
                <div
                  className={`h-[240px] w-[240px] bg-[#0E464F] text-center justify-center cursor-pointer block border border-[#24A0B5]  rounded-[12px]`}
                >
                  {imageUrl ? (
                    <img
                      className="w-full h-full"
                      src={imageUrl}
                      alt="Uploaded"
                    />
                  ) : (
                    <div className=" w-[50%] mx-auto h-full grid place-content-center  text-center items-center">
                      <div className="text-white">
                        {" "}
                        <div className="flex flex-col justify-center items-center">
                          <TbCloudDownload size={24} />
                          <span>Drag and drop or click to upload</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
            {/* <Button onClick={openUploadWidget} className="cursor-pointer">
            Upload Image
          </Button> */}
          </div>
        </div>
        <div className="w-[90%] h-1 bg-[#07373F] roboto-text division mx-auto my-8"></div>
        <div>
          <div className="w-[90%] mx-auto flex flex-col gap-3">
            <label className="text-white flex-1" htmlFor="name">
              Enter your name:
            </label>
            <input
              className="text-white flex-1 border border-[#07373F] p-3 rounded-[12px]"
              type="text"
              id="name"
              {...register("step2.name")}
            />
            <p className="text-red-700">{errors.step2?.name?.message}</p>
          </div>
          <div className="w-[90%] mx-auto flex flex-col gap-3">
            <label className="text-white flex-1" htmlFor="email">
              Enter your email:
            </label>
            <input
              className="text-white flex-1 border border-[#07373F] p-3 rounded-[12px]"
              type="email"
              id="email"
              {...register("step2.email")}
            />
            <p className="text-red-700">{errors.step2?.email?.message}</p>
          </div>
          <div className="w-[90%] mx-auto flex flex-col gap-3">
            <label className="text-white flex-1" htmlFor="textarea">
              Special request?
            </label>
            <textarea
              className="text-white border border-[#07373F] p-3 rounded-[12px] h-[127px]"
              id="textarea"
              placeholder="Textarea"
              {...register("step2.message")}
            ></textarea>
            <p className="text-red-700">{errors.step2?.message?.message}</p>
          </div>
          <div className="flex flex-col w-[90%] gap-3 mt-6 pb-6 mx-auto md:flex-row">
            <Button
              className="jeju-text flex-1 border border-(--secondaryColor) text-(--secondaryColor) py-6 px-3 text-[16px] rounded-[12px] cursor-pointer"
              onClick={() => prevStep && prevStep()}
            >
              Back
            </Button>
            <Button
              className="jeju-text flex-1 border border-(--secondaryColor) text-white bg-(--secondaryColor) py-6 px-3 text-[16px] rounded-[12px] cursor-pointer"
              type="submit"
            >
              Get My Free Ticket
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AttendeeDetails;
