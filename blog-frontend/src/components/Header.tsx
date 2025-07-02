import React from 'react';

interface BlogCardProps  {
  title: string;
  imageUrl: string;
  excerpt: string;
  onReadMore: () => void;
};

const BlogCard: React.FC<BlogCardProps> = ({ title, imageUrl, excerpt, onReadMore }) => {
  return (
    <article className="w-full md:w-4/5 lg:w-3/4 xl:w-2/3 mx-auto rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 p-0 bg-white dark:bg-gray-900 mb-10 overflow-hidden transition hover:shadow-xl">
      <div className="relative group">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow-md opacity-90">Featured</div>
      </div>
      <div className="p-6 flex flex-col gap-2">
        <h2 className="text-2xl font-bold mb-1 text-gray-900 dark:text-white line-clamp-2">{title}</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">{excerpt}</p>
        <button
          onClick={onReadMore}
          className="self-start bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        >
          Read More
        </button>
      </div>
    </article>
  );
};

export default BlogCard;
