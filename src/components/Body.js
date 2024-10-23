import React, { useState, useEffect, useRef } from 'react';
import { FaSortDown,FaCog,FaClipboard,FaArrowDown,FaHeart } from 'react-icons/fa';
import logo from '../logos/makerble_logo2.jpg';
import myPic from '../logos/myPic.jpg';
import Contacts from './bodyNavBar/Contacts';
import Projects from './bodyNavBar/Projects';
import Albums from './bodyNavBar/Albums';
import Organization from './bodyNavBar/Organization';
import Followers from './bodyNavBar/Followers';
import Following from './bodyNavBar/Following';
import Boards from './bodyNavBar/Boards';
import Progress from './bodyNavBar/Progress';
import Tasks from './bodyNavBar/Tasks';
const Body = () => {
  const navItems = [
    'Contacts', 'Projects', 'Albums', 'Organization', 'Followers',
    'People you follow', 'Boards', 'Personal Progress', 'Tasks'
  ];

  // Define components for each menu item
  const navItemComponents = {
    Contacts: <Contacts />,
    Projects: <Projects />,
    Albums: <Albums />,
    Organization: <Organization />,
    Followers: <Followers />,
    'People you follow': <Following />,
    Boards: <Boards />,
    'Personal Progress': <Progress />,
    Tasks: <Tasks />
  };

  const [openIndex, setOpenIndex] = useState(null);
  const [maxHeights, setMaxHeights] = useState({});
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('')
  // Create an array of refs for all the items
  const contentRefs = useRef([]);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);

    if (contentRefs.current[index]) {
      const scrollHeight = contentRefs.current[index].scrollHeight;
      setMaxHeights((prevHeights) => ({
        ...prevHeights,
        [index]: scrollHeight
      }));
    }
  };
;

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    
    // Validate the input length
    if (value.length < 3) {
      setError('Posts need to be longer than 3 characters');
    } else {
      setError(''); // Clear the error message if valid
    }
  };
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

    {
      id: 2,
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
    {
      id: 3,
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
    {
      id: 4,
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
  return (
    <div className="flex min-h-full inset-0">
      {/* Left Section: Vertical Navbar */}
      <div className="w-1/4 h-full bg-gray-800 text-white p-4 hidden lg:block overflow-auto sticky top-12 z-40">
        <ul>
          {navItems.map((item, index) => {
            return (
              <li key={index} className="my-4 cursor-pointer">
                <button
                  onClick={() => toggleItem(index)}
                  className="flex justify-between py-2 px-4 w-full text-left text-lg font-semibold bg-gray-700 text-white rounded-md focus:outline-none"
                >
                  {item}
                  <div className={`transform ease-in transition-transform duration-300 h-7 w-7 ${openIndex === index ? 'rotate-180' : 'rotate-0'}`}>
                    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="m19.5 8.25-7.5 7.5-7.5-7.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  </div>
                </button>
                <div
                  ref={(el) => (contentRefs.current[index] = el)} // Assign each item its ref
                  style={{
                    maxHeight: openIndex === index ? `${maxHeights[index]}px` : '0',
                    transition: 'max-height 300ms ease-in-out, opacity 300ms ease-in-out',
                    opacity: openIndex === index ? '1' : '0'
                  }}
                  className="overflow-hidden bg-gray-600 text-white rounded-md mt-2"
                >
                  <div className="p-4 bg-white text-gray-700">{navItemComponents[item]}</div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Right Section: Newsfeed */}
      <div className="lg:w-3/4 w-full p-4 overflow-none">
       <div className="flex justify-start items-center gap-2">
       <input 
       type="text"
       id="postInput"
       value={inputValue}
       onChange={handleChange}
       className="lg:w-1/2 w-full h-12 p-1 rounded-md outline-none" 
       placeholder="Prabin Roy share some progress"/>
       <button className="py-1 px-4 h-12   bg-blue-500 hover:bg-blue-600 text-white rounded-md ">Post</button>
       </div>
       {error && <p className="text-red-500 mt-1">{error}</p>} {/* Show error message */}
        
        <div className="flex justify-end text-blue-500 cursor-pointer"><p>Story filter</p> <FaSortDown size={20}/></div>
        <h1 className="text-2xl font-bold mb-4">Newsfeed</h1>
        <div className="flex flex-col gap-4">

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

<button className="py-1 px-4 h-12 w-1/4 mx-auto   bg-blue-500 hover:bg-blue-600 text-white rounded-md ">Load More...</button>
        </div>
        
      </div>
    </div>
  );
};

export default Body;
