import { LikeIcon, ReplyIcon, RetweetIcon, ShareIcon, ViewIcon } from "../icons/Icons";

const FeedItem = ({
  avatar,
  content,
  displayName,
  image,
  timestamp,
  userName,
}) => {
  return (
    <article className="flex space-x-3 border-b border-gray-extraLight px-4 py-3 cursor-pointer">
      <img src={avatar} alt="Profile" className="w-11 h11 rounded-full max-h-11" />
      <div className="flex-1">
        <div className="flex items-center text-sm space-x-1">
          <h4 className="font-bold text-gray-800">{displayName}</h4>
          <span className="text-gray-600">{userName}</span>
          <div className="mx-2 bg-gray-400 h-1 w-1 border rounded-full" />
          <span className="text-gray-600">{timestamp?.toDate().toLocaleTimeString("tr-TR")}</span>
        </div>
        <p className="mt-2 text-gray-900 text-sm">{content}</p>
        {image && (
          <img src={image} alt="image" className="my-2 rounded-xl max-h-96" />
        )}
        <ul className="-ml-1 mt-3  flex justify-between max-w-md">
          <li className="flex items-center space-x-3 text-gray-500 text-sm group">
            <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-blue-200">
              <ReplyIcon className="w-6 h-6 overflow-visible  group-hover:text-primary-base"/>
            </div>
            <span className="group-hover:text-primary-base">7</span>
          </li>
          <li className="flex items-center space-x-3 text-gray-500 text-sm group">
            <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-green-200">
              <RetweetIcon className="w-6 h-6 overflow-visible group-hover:text-green-400"/>
            </div>
            <span className="group-hover:text-green-400">7</span>
          </li>
          <li className="flex items-center space-x-3 text-gray-500 text-sm group">
            <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-pink-200">
              <LikeIcon className="w-6 h-6 overflow-visible group-hover:text-pink-400"/>
            </div>
            <span className="group-hover:text-pink-400">7</span>
          </li>
          <li className="flex items-center space-x-3 text-gray-500 text-sm group">
            <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-blue-200">
              <ViewIcon className="w-6 h-6 overflow-visible group-hover:text-primary-base"/>
            </div>
            <span className="group-hover:text-primary-base">7</span>
          </li>
          <li className="flex items-center space-x-3 text-gray-500 text-sm group">
            <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-blue-200">
              <ShareIcon className="w-6 h-6 overflow-visible group-hover:text-primary-base"/>
            </div>
            <span className="group-hover:text-primary-base">7</span>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default FeedItem;
