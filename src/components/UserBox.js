import React from "react";
import { LockIcon, TweetMoreIcon } from "../icons/Icons";
import {profileImage} from "../images/profileImage"

const UserBox = () => {
  return (
    <div className="flex justify-between items-center mt-6 mb-6 hover:bg-gray-200 cursor-pointer rounded-full py-2 px-4 transform transition-colors duration-200">
      <div className="flex space-x-3 w-10/12">
        <div>
           <img
          src={profileImage}
          alt="profile"
          className="w-11 h-11 rounded-full"
        /> 
        </div>
        
        <div className="flex flex-col w-2/3">
          <span className="flex font-bold items-center text-md text-black">
           <p>Yusuf Aydos</p> <span className="pr-1"><LockIcon className={"w-4 h-4"}/></span>
          
          </span>
          <span className="text-sm text-gray-600 ">@YsfAyds</span>
        </div>
      </div>

      <div className="w-2/12 flex justify-end">
        <TweetMoreIcon className={"w-5 h-5"} />
      </div>
    </div>
  );
};

export default UserBox;
