import { useRef, useState } from "react";
import { CircleUser, Upload } from "lucide-react";
import axios from "axios";

const ImageUpload = ({setImages}) => {
  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = async(e) => {
    const file = e.target.files[0];
    if (file) {
     setPreview(URL.createObjectURL(file));
    }
    if(!file) return;
    const formdata=new FormData()
    formdata.append('file',file)
    formdata.append('upload_preset',"parcel-delivery-users")

    try {
      let img=await axios.post("https://api.cloudinary.com/v1_1/dmwlysue6/image/upload",formdata)
       setImages(img?.data?.url)
      
     } catch (error) {
       console.log(error);
    }
  };

  return (
    <div className="flex justify-start items-start">
      <div className="relative w-12 h-12">
        {/* Image */}
        <div
          onClick={handleImageClick}
          className="w-full h-full rounded-full bg-gray-200 overflow-hidden cursor-pointer border-2 border-gray-300"
        >
          {preview ? (
            <img
              src={preview}
              alt="avatar"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex items-center justify-center w-full h-full text-gray-400">
               <CircleUser />
            </div>
          )}
        </div>

        {/* Upload Icon */}
        <div
          onClick={handleImageClick}
          className="absolute bottom-0 -right-1 background-color p-1 rounded-full cursor-pointer shadow-md hover:bg-green-600 transition"
        >
          <Upload className="w-3 h-3 text-white" />
        </div>

        {/* Hidden Input */}
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageChange}
          className="hidden"
        />
      </div>
    </div>
  );
};

export default ImageUpload;
