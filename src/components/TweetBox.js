import { useState } from "react";
import { EmojiIcon, GIFIcon, ImageIcon, LocationIcon, PollIcon, ScheduleIcon } from "../icons/Icons";
import db from "../Firebase"
import firebase from "firebase"

const TweetBox = () => {
  const [content, setContent] = useState("")
  
  
  const sendTweet = () => {
    
      if(content !== ""){
        db.collection("feed").add({
          displayName: "Yusuf Aydos",
          userName: "@YsfAyds",     
          content,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          image : "",
          avatar: "https://img.myloview.com/stickers/default-avatar-profile-icon-vector-social-media-user-photo-700-205577532.jpg",
          like:0,
          reply:0,
          retweet:0,
          view:0

          
  
        });
  
        setContent("");
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
