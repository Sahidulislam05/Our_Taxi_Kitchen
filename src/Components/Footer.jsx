import { AtSign } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-black mt-36">
      <div className="w-11/12 mx-auto p-7">
        <div className="flex justify-center items-center gap-2 md:gap-3">
          <AtSign className="text-white" />
          <h1 className="text-center md:text-xl text-white ">
           2025 || Sahidul Islam. 
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
