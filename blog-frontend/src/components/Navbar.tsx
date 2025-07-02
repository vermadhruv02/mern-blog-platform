import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";

const navLinks = [
	{ name: "Home", href: "/" },
	{ name: "About", href: "/about" },
	// { name: "Services", href: "/services" },
	{ name: "Contact", href: "/contact" },
	{ name: "Login", href: "/login" },
	{ name: "Register", href: "/register" },
];

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [darkMode, setDarkMode] = useState(
		() =>
			window.matchMedia &&
			window.matchMedia("(prefers-color-scheme: dark)").matches
	);
	const location = useLocation();

	// Toggle dark mode and update html class
	const toggleDarkMode = () => {
		setDarkMode((prev) => {
			const next = !prev;
			if (next) {
				document.documentElement.classList.add("dark");
			} else {
				document.documentElement.classList.remove("dark");
			}
			return next;
		});
	};

	return (
		<nav className="
    w-full
    
    lg:w-[75%] mx-auto bg-white dark:bg-gray-900 shadow-md px-4 py-3 flex items-center justify-between">
			{/* Logo */}
			<div className="flex items-center">
				<Link
					to="/"
					className="text-2xl font-bold text-blue-600 dark:text-blue-400"
				>
					MyLogo
				</Link>
			</div>
			{/* Hamburger menu for mobile */}
			<button
				className="md:hidden ml-2 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
				aria-label={menuOpen ? "Close menu" : "Open menu"}
				onClick={() => setMenuOpen((open) => !open)}
			>
				{menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
			</button>
			{/* Navigation links */}
			<div
				className={`${
					menuOpen ? "flex" : "hidden"
				} md:flex flex-col md:flex-row md:items-center absolute md:static top-16 left-0 w-full md:w-auto bg-white dark:bg-gray-900 md:bg-transparent z-20 md:z-auto shadow md:shadow-none transition-all`}
				role="menu"
			>
				{navLinks.map((link) => (
					<Link
						key={link.name}
						to={link.href}
						className={`block  md:mx-2  text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium ${
							location.pathname === link.href
								? "border-b border-blue-400 py-2 px-4 rounded-xl dark:bg-gray-800 text-blue-700 dark:text-blue-400"
								: ""
						}`}
						onClick={() => setMenuOpen(false)}
						aria-current={
							location.pathname === link.href ? "page" : undefined
						}
					>
						{link.name}
					</Link>
				))}
				{/* Dark mode toggle */}
				<button
					className="ml-0 md:ml-4 mt-2 md:mt-0 flex items-center px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
					onClick={toggleDarkMode}
					aria-label="Toggle dark mode"
					type="button"
				>
					{darkMode ? (
						<Sun className="h-5 w-5 text-yellow-400" />
					) : (
						<Moon className="h-5 w-5 text-gray-600 dark:text-gray-200" />
					)}
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
