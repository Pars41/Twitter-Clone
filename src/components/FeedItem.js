import { LikeIcon, ReplyIcon, RetweetIcon, ShareIcon, TwitterBlue, ViewIcon } from "../icons/Icons";

const FeedItem = ({
  avatar,
  content,
  displayName,
  image,
  timestamp,
  userName,
  twitterBlue,
  like,
  retweet,
  view,
  reply
}) => {
  console.log(like);
  return (
    <article className="flex space-x-3 border-b border-gray-extraLight px-4 py-3 cursor-pointer">
      <img src={avatar} alt="Profile" className="w-12 h-12 rounded-full max-h-12" />
      <div className="flex-1">
        <div className="flex items-center text-sm space-x-1">
          <h4 className="font-bold text-gray-800">{displayName}</h4>
          {twitterBlue ?  <TwitterBlue className="w-6 h-6 pt-1 text-primary-base"/> : ""}
          <span className="text-gray-600">{userName}</span>
          <div className="mx-2 bg-gray-400 h-1 w-1 border rounded-full" />
          <span className="text-gray-600">{timestamp?.toDate().toLocaleTimeString("tr-TR")}</span>
        </div>
        <p className="mt-0 text-gray-700 text-base leading-5 font-normal">{content}</p>
        {image && (
          <img src={image} alt="image" className="my-2 rounded-xl max-h-96" />
        )}
        <ul  className="-ml-1 mt-0  flex justify-between  max-w-md">
          <li className="flex items-center space-x-1 text-gray-500 text-sm group">
            <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-blue-200">
              <ReplyIcon className="w-5 h-5 overflow-visible  group-hover:text-primary-base"/>
            </div>
            <span className="group-hover:text-primary-base text-sm  ">{(reply || reply === 0 ? (reply>5000 ? `${reply.toString().slice(0,-3)}K` :reply) : 7)}</span>
          </li>
          <li className="flex items-center space-x-1 text-gray-500 text-sm group">
            <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-green-200">
              <RetweetIcon className="w-5 h-5 overflow-visible group-hover:text-green-400"/>
            </div>
            <span className="group-hover:text-green-400 text-sm ">{(retweet || retweet===0 ? (retweet>5000 ? `${retweet.toString().slice(0,-3)}K` :retweet) : 7)}</span>
          </li>
          <li className="flex items-center space-x-1 text-gray-500 text-sm group">
            <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-pink-200">
              <LikeIcon className="w-5 h-5 overflow-visible group-hover:text-pink-400"/>
            </div>
            <span className="group-hover:text-pink-400 text-sm ">{(like || like===0? (like>5000 ? `${like.toString().slice(0,-3)}K` :like) : 7)}</span>
          </li>
          <li className="flex items-center space-x-1 text-gray-500 text-sm group">
            <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-blue-200">
              <ViewIcon className="w-5 h-5 overflow-visible group-hover:text-primary-base"/>
            </div>
            <span className="group-hover:text-primary-base text-sm ">{(view || view === 0 ? (view>5000 ? `${view.toString().slice(0,-3)}K` :view) : "46.2K")}</span>
          </li>
          <li className="flex items-center space-x-1 text-gray-500 text-sm group">
            <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-blue-200">
              <ShareIcon className="w-5 h-5 overflow-visible group-hover:text-primary-base"/>
            </div>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default FeedItem;
