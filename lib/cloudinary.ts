// const openUploadWidget = () => {
//     //@ts-ignore
//     window.cloudinary.openUploadWidget(
//       {
//         cloudName: "YOUR_CLOUD_NAME",
//         uploadPreset: "your_upload_preset",
//         sources: ["local", "camera"],
//         multiple: false,
//         cropping: true,
//         croppingAspectRatio: 1, // Square crop
//         maxFileSize: 2000000, // 2MB max
//         theme: "minimal",
//       },
//       (error: any, result: { event: string; info: { secure_url: SetStateAction<string>; }; }) => {
//         if (!error && result.event === "success") {
//           setImageUrl(result.info.secure_url);
//         }
//       }
//     );
//   };

//   const onDrop = useCallback(async (acceptedFiles: File[]) => {
//     const file = acceptedFiles[0];
//     if (!file) return;

//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("upload_preset", "ybesroqu");

//     try {
//       const response = await fetch(
//         `https://api.cloudinary.com/v1_1/dkz10mn2q/image/upload`,
//         {
//           method: "POST",
//           body: formData,
//         }
//       );
//       const data = await response.json();
//       setImageUrl(data.secure_url);
//     } catch (error) {
//       console.error("Upload failed", error);
//     }
//   }, []);
