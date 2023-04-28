import React from "react";
import { Timeline } from "react-twitter-widgets";
import { SearchIcon } from "../icons/Icons";

const Widgets = () => {
  return (
    <aside className=" w-96 ml-6 ">
      <div className="flex items-center space-x-4 p-3 m-3 bg-gray-200 rounded-full text-gray-dark focus-within:bg-white focus-within:ring-1 focus-within:ring-primary-base focus-within:text-gray-700">
        <SearchIcon className="w-5 h-5 text-gray-400" />
        <input
          type="search"
          placeholder="Search Twitter"
          className="placeholder-gray-600 bg-transparent focus:outline-none w-full text-sm "
        />
      </div>
      <div className="mt-5">
        <Timeline
          dataSource={{
            sourceType: "profile",
            screenName: "elonmusk",
          }}
          options={{
            height: "1000",
          }}
        />
       
      </div>
    </aside>
  );
};

export default Widgets;
