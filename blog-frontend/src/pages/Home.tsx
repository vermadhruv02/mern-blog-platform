// import BlogApp from "../components/BlogApp"
// import { handleReadMore } from "../components/BlogApp"
import BlogCard from "../components/Header"
const handleReadMore = () => {
    alert('Redirecting to full blog post...');
  };

  const renderBlogCards = () => {
  const blogCards = [];
  for (let index = 0; index < 9; index++) {
    blogCards.push(
      <BlogCard
        key={index}
        title={
          index % 3 === 0
            ? "How to Build a Modern Blog with React & Tailwind"
            : index % 3 === 1
            ? "10 Tips for Writing Engaging Blog Posts"
            : "Exploring the Future of Web Development"
        }
        imageUrl={
          index % 3 === 0
            ? "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
            : index % 3 === 1
            ? "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
            : "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80"
        }
        excerpt={
          index % 3 === 0
            ? "A step-by-step guide to building a beautiful, responsive blog using React and Tailwind CSS."
            : index % 3 === 1
            ? "Discover proven strategies to make your blog posts more engaging and shareable."
            : "A look at the latest trends and technologies shaping the future of web development."
        }
        onReadMore={handleReadMore}
      />
    );
  }
  return blogCards;
};

const Home = () => {
  return (
    <>
      {/* Hero Section with background image */}
     <section className="relative  sm:h-96 w-full  overflow-hidden">
  {/* Darkened background image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80')",
      filter: "brightness(0.9)", // only darkens the image
    }}
  />

  {/* Content on top of the image */}
  <div className="relative z-10 h-full flex flex-col justify-end items-center px-4 py-8 text-center text-white">
    <h1 className="text-4xl md:text-5xl font-extrabold mb-2">
      Welcome to <span className="text-blue-400">MyBlog</span>
    </h1>
    <p className="text-lg md:text-xl text-gray-200 mb-4">
      Discover, share, and explore insightful articles on technology, design, and more.
    </p>
    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-400">
      Get Started
    </button>
  </div>
</section>


      {/* Blog Cards List */}
      <div className="min-h-screen px-4 py-8 flex flex-col items-center">
        <section className="w-full lg:grid lg:grid-cols-2 gap-8 items-center">
          {renderBlogCards()}
        </section>
      </div>
    </>
  );
};


export default Home

// navbar 
// hero section