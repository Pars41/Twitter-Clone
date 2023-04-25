import React from "react";
import { LockIcon, TweetMoreIcon } from "../icons/Icons";

const UserBox = () => {
  return (
    <div className="flex justify-between items-center mt-6 mb-6 hover:bg-gray-200 cursor-pointer rounded-full py-2 px-4 transform transition-colors duration-200">
      <div className="flex space-x-3 w-10/12">
        <div>
           <img
          src="https://media.licdn.com/dms/image/D4D03AQFWZVGsh-PfDA/profile-displayphoto-shrink_400_400/0/1681720417433?e=1687392000&v=beta&t=GVhVGIAIuq-aMn_wmSaMsujtE_2Sm0Pil47TSj0zu_E"
          alt="profile"
          className="w-11 h-11 rounded-full"
        /> 
        </div>
        
        <div className="flex flex-col w-2/3">
          <span className="flex font-bold text-md text-black">
           <p>Yusuf Aydos</p> <span className="pr-1"><LockIcon/></span>
          
          </span>
          <span className="text-sm text-gray-dark">@YusufAydos</span>
        </div>
      </div>

      <div className="w-2/12">
        <TweetMoreIcon />
      </div>
    </div>
  );
};

export default UserBox;
