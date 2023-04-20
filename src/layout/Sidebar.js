import React from "react";
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
} from "../icons/Icons";

const Sidebar = () => {
  return (
    <div className="w-72 bg-blue-200">
      <h1>Sidebar</h1>
      <HomeIcon />
      <ExploreIcon />
      <NotificationsIcon />
      <MessagesIcon />
      <BookmarksIcon />
      <ListsIcon />
      <ProfileIcon />
      <MoreIcon />
      <hr />
      <hr />
      <hr />

      <DirectionIcon />
      <EarthIcon />
      <ImageIcon />
      <GIFIcon />
      <PollIcon />
      <EmojiIcon />
      <ScheduleIcon />
      <LocationIcon />

      <hr />
      <hr />
      <hr />

      <VerifiedIcon />
      <TweetMoreIcon />
      <ReplyIcon />
      <RetweetIcon />
      <LikeIcon />
      <ViewIcon />
      <ShareIcon />

      <hr />
      <hr />
      <hr />

      <SearchIcon />
    </div>
  );
};

export default Sidebar;
