import { ImageIcon } from "../icons/Icons";

const TweetBox = () => {
  return (
    <div className="flex flex-col flex-1 mt-2 px-2" >
      <textarea className="w-full text-xl placeholder-gray-dark outline-none overflow-hidden resize-none bg-transparent" placeholder="What's Happening?" ></textarea>
      <div className="flex items-center justify-between">
        <div>
            <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
                <ImageIcon className="w-6 h-6 text-primary-base" />
            </div>
            
        </div>
        <button className="bg-primary-base text-white rounded-full px-4 py-2 font-medium">Tweet</button>
      </div>
    </div>
  );
};

export default TweetBox;
