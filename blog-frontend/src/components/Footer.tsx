const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-t from-gray-100 via-white to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 shadow-inner  p-8 mt-10 text-center text-gray-600 dark:text-gray-300 text-sm">
      <div className="flex flex-col md:flex-row md:justify-between items-center max-w-5xl mx-auto gap-4">
        {/* Logo and copyright */}
        <div className="flex flex-col items-center md:items-start">
          <span className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-1">MyBlog</span>
          <p className="text-xs">&copy; {new Date().getFullYear()} MyBlog. All rights reserved.</p>
        </div>
        {/* Footer navigation */}
        <div className="flex space-x-6 mt-2 md:mt-0">
          <a href="#" className="hover:underline hover:text-blue-600 dark:hover:text-blue-400 transition">Privacy Policy</a>
          <a href="#" className="hover:underline hover:text-blue-600 dark:hover:text-blue-400 transition">Terms of Service</a>
          <a href="#" className="hover:underline hover:text-blue-600 dark:hover:text-blue-400 transition">Contact</a>
        </div>
        {/* Social icons */}
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" aria-label="Twitter" className="hover:text-blue-500 transition">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 5.92c-.8.36-1.67.6-2.58.71a4.48 4.48 0 0 0 1.97-2.48 8.93 8.93 0 0 1-2.83 1.08A4.48 4.48 0 0 0 11.5 9.5c0 .35.04.7.1 1.03A12.7 12.7 0 0 1 3.1 5.1a4.48 4.48 0 0 0 1.39 5.98c-.7-.02-1.36-.21-1.94-.53v.05a4.48 4.48 0 0 0 3.6 4.4c-.33.09-.68.14-1.04.14-.25 0-.5-.02-.74-.07a4.48 4.48 0 0 0 4.18 3.1A9 9 0 0 1 2 19.54a12.7 12.7 0 0 0 6.88 2.02c8.26 0 12.78-6.84 12.78-12.78 0-.2 0-.41-.02-.61a9.1 9.1 0 0 0 2.24-2.32z" /></svg>
          </a>
          <a href="#" aria-label="GitHub" className="hover:text-gray-800 dark:hover:text-gray-100 transition">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.48 2.87 8.28 6.84 9.63.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.38-2.03 1-2.75-.1-.26-.44-1.3.1-2.7 0 0 .83-.27 2.75 1.03A9.36 9.36 0 0 1 12 6.84c.84.004 1.68.11 2.47.32 1.92-1.3 2.75-1.03 2.75-1.03.54 1.4.2 2.44.1 2.7.62.72 1 1.63 1 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" /></svg>
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-blue-700 transition">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm13.5 10.29h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.88v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z" /></svg>
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer
