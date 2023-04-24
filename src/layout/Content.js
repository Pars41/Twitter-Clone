import React from "react";
import Divider from "../components/Divider";
import TweetBox from "../components/TweetBox";
import { ProfileIcon } from "../icons/Icons";

const Content = () => {
 
  
  return (
    <main className="flex-1 flex flex-col border-r border-l border-gray-extraLight ">
      <header className="sticky top-0 z-10 flex justify-between items-center p-4 border-b border-gray-extraLight bg-white">
        <span className="font-bold text-xl text-gray-900">Home</span>
        <ProfileIcon />
      </header>
      <div className="flex px-4 space-x-4 py-3">
      <img src="https://media.licdn.com/dms/image/D4D03AQFWZVGsh-PfDA/profile-displayphoto-shrink_400_400/0/1681720417433?e=1687392000&v=beta&t=GVhVGIAIuq-aMn_wmSaMsujtE_2Sm0Pil47TSj0zu_E" alt="profile" className='w-11 h-11 rounded-full'/>
        <TweetBox/>
      </div>
      <Divider/>
      
    </main>
  );
};

export default Content;
