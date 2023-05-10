import React, { useState } from "react";
import { FaHeart, FaComment, } from "react-icons/fa";
import * as faker from 'faker';

const POSTS_COUNT = 3;

export const generatePost = () => {
  const title = faker.lorem.words(3);
  const author = faker.name.firstName();
  const imageUrl = `https://picsum.photos/1200?random=${faker.random.number()}`;
  const likes = faker.random.number({ min: 1, max: 1000 });
  const comments = faker.random.number({ min: 0, max: 100 });
  const date = faker.date.recent().toLocaleDateString();
  return {
    title,
    author,
    imageUrl,
    likes,
    comments,
    date,
  };
};

export const generatePosts = () => {
  const posts = [];
  for (let i = 0; i < POSTS_COUNT; i++) {
    posts.push(generatePost());
  }
  return posts;
};

const PostsButtonShow = () => {
  const [posts, setPosts] = useState([]);

  const handleGeneratePosts = () => {
    setPosts(generatePosts());
  };

  return (
    <>
      <div className="komon-5-1 ">
      <div className="w-full mt-5 mb-2">
          <div className="text-black flex justify-center w-full z-10">
        <button
className="w-[100%] h-8 md:h-12 focus:ring-4 group flex items-center justify-center p-0.7 text-center font-medium focus:z-10 rounded-lg cursor-pointer bg-transparent text-white border border-solid border-white"          onClick={handleGeneratePosts}
        >
          Load posts
        </button>
        </div>
        </div>
      </div>
      {posts.length > 0 && (
        <div className="grid grid-cols-3 gap-4 mt-2">
          {posts.map((post, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={post.imageUrl} alt={post.title} className="w-full" />
              <div className="flex items-center justify-between w-full mt-2">
                <div className="flex items-center">
                  <FaHeart className="mr-1" />
                  <span className="text-sm">{post.likes}</span>
                </div>
                <div className="flex items-center">
                  <FaComment className="mr-1" />
                  <span className="text-sm">{post.comments}</span>
                </div>
                <div className="flex items-center">
                </div>
              </div>
         
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default PostsButtonShow;
