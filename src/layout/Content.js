import React, { useEffect, useState } from "react";
import Divider from "../components/Divider";
import TweetBox from "../components/TweetBox";
import { ProfileIcon } from "../icons/Icons";
import { collection, getDocs } from "firebase/firestore";
import db from "../Firebase";
import FeedList from "../components/FeedList";

const Content = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    setTweets([
      {
        avatar:
          "https://media.licdn.com/dms/image/D4D03AQFWZVGsh-PfDA/profile-displayphoto-shrink_400_400/0/1681720417433?e=1687392000&v=beta&t=GVhVGIAIuq-aMn_wmSaMsujtE_2Sm0Pil47TSj0zu_E",
        content: "Is other field seen in firebase?",
        displayName: "Yusuf Aydos",
        image:
          " https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
        timestamp: 1682342555755,
        userName: "@YsfAyds",
      },
      {
        avatar: "https://www.w3schools.com/howto/img_avatar.png ",
        content: "Is other field seen in firebase?",
        displayName: "Yusuf Aydos",
        image:
          " https://imglarger.com/Images/before-after/ai-image-enlarger-1-after-2.jpg",
        timestamp: 1682342555755,
        userName: "@deneme",
      },
    ]);
    // getDocs(collection(db, "users")).orderBy("timestamp", "desc")
    // db.collection("users").orderBy("timestamp", "desc").onSnapshot(snapshot => setTweets(snapshot.docs.map(doc => doc.data())))
  }, []);

  return (
    <main className="flex-1 flex flex-col border-r border-l border-gray-extraLight ">
      <header className="sticky top-0 z-10 bg-white opacity-95">
        <div className=" flex justify-between items-center p-4 border-b border-gray-extraLight border-none">
          <span className="font-bold text-xl text-gray-900">Home</span>
        </div>
        <div className=" flex justify-evenly  ">
          <div className="w-1/2 flex justify-center hover:bg-gray-200 transform transition-colors duration-250 ">
            <p className="p-3 font-medium text-gray-500">For You</p>
          </div>
          <div className="w-1/2 flex justify-center hover:bg-gray-200 transform transition-colors duration-250">
            <p className="p-3 font-medium text-gray-500">Following</p>
          </div>
        </div>
      </header>

      <div className="flex px-4 space-x-4 py-3">
        <img
          src="https://media.licdn.com/dms/image/D4D03AQFWZVGsh-PfDA/profile-displayphoto-shrink_400_400/0/1681720417433?e=1687392000&v=beta&t=GVhVGIAIuq-aMn_wmSaMsujtE_2Sm0Pil47TSj0zu_E"
          alt="profile"
          className="w-11 h-11 rounded-full"
        />
        <TweetBox />
      </div>
      <Divider />
      {/* Feeds */}
      <FeedList tweets={tweets} />
    </main>
  );
};

export default Content;
