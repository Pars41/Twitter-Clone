import React, { useEffect, useState } from "react";
import Divider from "../components/Divider";
import TweetBox from "../components/TweetBox";
import FeedList from "../components/FeedList";
import db from "../Firebase";

const Content = () => {
  const [tweets, setTweets] = useState([]);
  const [feed, setFeed] = useState("you");

  useEffect(() => {
    db.collection("feed")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setTweets(snapshot.docs.map((doc) => doc.data()))
      );
    
  }, []);

  return (
    <main className="flex-1 flex flex-col border-r border-l border-gray-extraLight ">
      <header className="sticky top-0 z-10 bg-white opacity-95">
        <div className=" flex justify-between items-center p-3 border-b border-gray-extraLight border-none">
          <span className="font-bold text-xl text-gray-900 ">Home</span>
        </div>
        <div className=" flex justify-evenly border-b ">
          <div
            className="w-1/2 flex justify-center hover:bg-gray-200 transform transition-colors duration-250 "
            onClick={() => setFeed("you")}
          >
            <p
              className={`py-3 font-medium text-gray-500  ${
                feed === "you"
                  ? "border-b-4 border-primary-base text-gray-900"
                  : ""
              }`}
            >
              For You
            </p>
          </div>
          <div
            className="w-1/2 flex justify-center hover:bg-gray-200 transform transition-colors duration-250"
            onClick={() => setFeed("following")}
          >
            <p
              className={`py-3 font-medium text-gray-500  ${
                feed === "following"
                  ? "border-b-4 border-primary-base text-gray-900"
                  : ""
              }`}
            >
              Following
            </p>
          </div>
        </div>
      </header>

      <div className="flex px-4 space-x-4 py-3">
        <img
          src="https://media.licdn.com/dms/image/D4D03AQFWZVGsh-PfDA/profile-displayphoto-shrink_400_400/0/1681720417433?e=1687392000&v=beta&t=GVhVGIAIuq-aMn_wmSaMsujtE_2Sm0Pil47TSj0zu_E"
          alt="profile"
          className="w-12 h-12 rounded-full"
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
