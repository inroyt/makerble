import React, { useState } from 'react';
import { FaCog,FaClipboard,FaArrowDown,FaHeart } from 'react-icons/fa';
const posts = [
    {
      id: 1,
      userName: "Prabin Roy",
      activityDate: "Activity happened on 4th Dec 2023",
      firstPosted: "First Posted at 16:13 on 11th December 2023",
      lastEdited: "Last Edited at 16:13 on 11th Dec 2023",
      storyName: "stories-spreadsheet-import-at-10-43-on-11th-december-2023",
      newUpdate: "Working on the Using Football to teach life skills to children",
      organization: "An Organization Demo",
      collaborator: "Sofia",
      commentsCount: 0,
      favouritesCount: 0,
      editedAgo: "Edited 1 day Ago",
    },
    // Add more posts as needed
  ];

  const NewsFeed = () => {
    const myPic = "path_to_image"; // Replace with actual image path
    const [inputValue, setInputValue] = useState("");
  
    const handleChange = (e) => {
      setInputValue(e.target.value);
    };
  
    return (
      <div>
        {posts.map((post, index) => (
          <div key={post.id} className="flex justify-between items-start bg-white p-4 rounded-lg mb-4">
            <div className="flex justify-start items-start">
              <div>
                <img src={myPic} alt="Profile" className="h-12 w-auto rounded-md mt-1" />
              </div>
              <div className="flex flex-col items-start ml-2">
                <p className="bg-inherit px-1 text-blue-500">{post.userName}</p>
                <p className="bg-inherit px-1 text-sm text-gray-700">{post.activityDate}</p>
                <p className="bg-inherit px-1 text-sm text-gray-700">{post.firstPosted}</p>
                <p className="bg-inherit px-1 text-sm text-gray-700">{post.lastEdited}</p>
                <div className="bg-green-500 h-8 w-auto rounded-full relative mt-2 flex items-center justify-center text-white p-2 gap-2">
                  <FaClipboard size={15} />
                  <p>{post.storyName}</p>
                </div>
                <div className="bg-green-500 hover:bg-green-600 h-8 w-auto rounded-full relative mt-2 flex items-center justify-center text-white p-2 gap-2 cursor-pointer">
                  <p>Expand story</p>
                  <FaArrowDown size={15} />
                </div>
                <div className="mt-2">
                  New update by <span className="text-blue-500 cursor-pointer">{post.userName}</span> Working on the <span className="text-blue-500 cursor-pointer">{post.newUpdate}</span> for <span className="text-blue-500 cursor-pointer">{post.organization}</span> with <span className="text-blue-500 cursor-pointer">{post.collaborator}</span>
                </div>
                <div className="text-blue-500 mt-2 flex justify-between items-center gap-4 cursor-pointer border-b-2 border-gray-300 w-full py-2">
                  <FaHeart size={20} />
                  <div className="flex justify-evenly items-center gap-2 text-gray-500">
                    <p>{post.commentsCount} Comments</p>
                    <p>{post.favouritesCount} Favourites</p>
                  </div>
                </div>
                <div className="flex justify-start items-center gap-2 mt-2 min-w-full">
                  <div>
                    <img src={myPic} alt="Logo" className="h-12 w-auto rounded-md" />
                  </div>
                  <input
                    type="text"
                    id="postInput"
                    value={inputValue}
                    onChange={handleChange}
                    className="w-full h-12 p-1 rounded-md outline-none border-2 border-gray-400"
                    placeholder="Post a comment"
                  />
                  <button className="py-1 px-4 h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-md">Post</button>
                </div>
              </div>
            </div>
  
            <div className="text-blue-500 flex gap-2 items-center">
              <p className="text-gray-700">{post.editedAgo}</p>
              <FaCog size={15} />
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default NewsFeed;
  