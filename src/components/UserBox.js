import React from "react";
import { LockIcon, TweetMoreIcon } from "../icons/Icons";

const UserBox = () => {
  return (
    <div className="flex justify-between items-center mb-6 hover:bg-primary-light cursor-pointer rounded-full py-2 px-4 transform transition-colors duration-200">
      <div className="flex space-x-3">
        <div>
           <img
          src="https://media.licdn.com/dms/image/D4D03AQFWZVGsh-PfDA/profile-displayphoto-shrink_400_400/0/1681720417433?e=1687392000&v=beta&t=GVhVGIAIuq-aMn_wmSaMsujtE_2Sm0Pil47TSj0zu_E"
          alt="profile"
          className="w-11 h-11 rounded-full"
        /> 
        </div>
        
        <div className="flex flex-col">
          <span className="font-bold text-md text-black ">Yusuf Aydos <span><LockIcon/></span></span>
          <span className="text-sm text-gray-dark">@YusufAydos</span>
        </div>
      </div>

      <div>
        <TweetMoreIcon />
      </div>
    </div>
  );
};

export default UserBox;
