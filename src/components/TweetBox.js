import { useState } from "react";
import { EmojiIcon, GIFIcon, ImageIcon, LocationIcon, PollIcon, ScheduleIcon } from "../icons/Icons";
import {db} from "../Firebase"
import { addDoc, collection } from "firebase/firestore";
const TweetBox = () => {
  const [content, setContent] = useState("")
  
  
  const sendTweet = () => {
    if(content !== ""){
      addDoc(collection(db, "users"), {
        displayName: "Yusuf Aydos",
        userName: "@YsfAyds",
        content,
        timestamp: new Date().getTime(),
        image : " https://imglarger.com/Images/before-after/ai-image-enlarger-1-after-2.jpg",
        avatar: "https://www.w3schools.com/howto/img_avatar.png "
        

      });

      setContent("")
    }
  }
  return (
    <div className="flex flex-col flex-1 mt-2 px-2" >
      <textarea className="w-full text-xl placeholder-gray-dark outline-none overflow-hidden resize-none bg-transparent" placeholder="What's Happening?" onChange={e => setContent(e.target.value)} value={content}></textarea>
      <div className="flex items-center justify-between">
        <div className="flex -ml-3 space-x-1">
            <div className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-lightest">
                <ImageIcon className="w-6 h-6 text-primary-base" />
            </div>
            <div className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-lightest">
                <GIFIcon className="w-6 h-6 text-primary-base" />
            </div>
            <div className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-lightest">
                <PollIcon className="w-6 h-6 text-primary-base" />
            </div>
            <div className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-lightest">
                <EmojiIcon className="w-6 h-6 text-primary-base" />
            </div>
            <div className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-lightest">
                <ScheduleIcon className="w-6 h-6 text-primary-base" />
            </div>
            <div className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-lightest">
                <LocationIcon className="w-6 h-6 text-primary-base opacity-50" />
            </div>
            
        </div>
        <button className={`bg-primary-base text-white rounded-full px-4 py-1 font-medium ${(content !== "")? "opacity-100" : "opacity-50"}`} onClick={sendTweet}>Tweet</button>
      </div>
    </div>
  );
};

export default TweetBox;
