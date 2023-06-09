import React, { useState } from "react";
import twitterLogo from "../images/twitter.svg";
import {
  BookmarksIcon,
  TweetMoreIcon,
  DirectionIcon,
  EarthIcon,
  EmojiIcon,
  ExploreIcon,
  GIFIcon,
  HomeIcon,
  ImageIcon,
  ListsIcon,
  LocationIcon,
  MessagesIcon,
  MoreIcon,
  NotificationsIcon,
  PollIcon,
  ProfileIcon,
  ScheduleIcon,
  VerifiedIcon,
  ReplyIcon,
  RetweetIcon,
  LikeIcon,
  ViewIcon,
  ShareIcon,
  SearchIcon,
  VerificationIcon,
} from "../icons/Icons";
import SideLink from "../components/SideLink";
import UserBox from "../components/UserBox";

const sideLinks = [
  {
    name: "Home",
    icon: HomeIcon,
  },
  {
    name: "Explore",
    icon: ExploreIcon,
  },
  {
    name: "Notifications",
    icon: NotificationsIcon,
  },

  {
    name: "Messsages",
    icon: MessagesIcon,
  },
  {
    name: "Bookmarks",
    icon: BookmarksIcon,
  },
  {
    name: "Twitter Blue",
    icon: ListsIcon,
  },
  {
    name: "Verified Organiza...",
    icon: VerificationIcon,
  },
  {
    name: "Profile",
    icon: ProfileIcon,
  },
  {
    name: "More",
    icon: MoreIcon,
  },
];

const Sidebar = () => {
  const [active, setActive] = useState("Home");
  const handleMenuItemClick = (name) => {
    setActive(name);
  };
  return (
    <div className="h-screen sticky top-0 flex flex-col justify-between w-72 px-3">
      <div>
        <div className="mt-1 mb-1 ml-1 flex items-center justify-center w-12 h-12 rounded-full hover:bg-gray-200 transform transition-colors duration-300">
          <img src={twitterLogo} alt="Twitter Logo" className="w-7 h-7" />
        </div>
        <nav className="mb-2">
          <ul>
            {sideLinks.map(({ name, icon }) => (
              <SideLink
                key={name}
                name={name}
                Icon={icon}
                active={active}
                onMenuItemClick={handleMenuItemClick}
              />
            ))}
          </ul>
        </nav>
        <div>
          <button className="bg-primary-base hover:bg-primary-dark text-white shadow-lg rounded-full py-3 px-8 w-10/12 transform transition-colors duration-200">
            Tweet
          </button>
        </div>
      </div>
      <UserBox />
    </div>
  );
};

export default Sidebar;
