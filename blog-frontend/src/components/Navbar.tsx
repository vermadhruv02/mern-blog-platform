import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "./ui/button";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import SearchBar from "./SearchBar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FaPlus, FaRegUser } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";

const navLinks = [
	{ name: "Home", href: "/" },
	{ name: "About", href: "/about" },
	// { name: "Services", href: "/services" },
	{ name: "Contact", href: "/contact" },
	{ name: "Login", href: "/login" },
	{ name: "Register", href: "/register" },
];

import { useTheme } from "@/components/theme-provider"
import { showToast } from "@/helper/ShowToast";
import { useDispatch } from "react-redux";
import axios from "axios";
import { removeUser } from "@/store/userSlice";


const Navbar = () => {
	const { setTheme } = useTheme();
	const [menuOpen, setMenuOpen] = useState(false);
	const [darkMode, setDarkMode] = useState(
		() =>
			window.matchMedia &&
			window.matchMedia("(prefers-color-scheme: dark)").matches
	);
	const location = useLocation();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleLogout = async () => {
		try {
			const response = await axios.post('/api/v1/user/logout');
			console.log(response)
			const responseData = response.data;
			// const user = responseData.data.user;
			if (responseData.status !== 'success') {
				console.log('Login successful:', user);
				showToast( 'Loged Out successful','success');
				dispatch(removeUser());
				navigate('/');
			}
		} catch (error) {
			showToast('Login failed', 'error');
			console.error('Login failed:', error);
		}
	};
	// Toggle dark mode and update html class
	const toggleDarkMode = () => {
		setDarkMode((prev) => !prev);
		setTheme(darkMode ? "light" : "dark");

	};
	const user = useSelector((state: RootState) => state.user);
	return (
		<header className="w-full sticky top-0 z-30 bg-white dark:bg-gray-900 shadow-md transition-colors duration-300">
			<div className="flex items-center justify-between h-16 max-w-7xl mx-auto px-4">
				{/* Logo */}
				<Link
					to="/"
					className="text-2xl font-bold text-blue-600 dark:text-blue-400"
				>
					MyLogo
				</Link>

				{/* Navigation links (horizontal for desktop, menu for mobile) */}
				<nav className="hidden md:flex gap-2 items-center ml-8">
					{/* {navLinks.map((link) => (
						<Link
							key={link.name}
							to={link.href}
							className={`px-3 py-2 rounded-xl font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${location.pathname === link.href
								? "border-b-2 border-blue-400 bg-gray-100 dark:bg-gray-800 text-blue-700 dark:text-blue-400"
								: ""
								}`}
							aria-current={location.pathname === link.href ? "page" : undefined}
						>
							{link.name}
						</Link>
					))} */}
					<SearchBar />
					{user.isLoggedIn ?

						<>
							<DropdownMenu>
								<DropdownMenuTrigger>
									<Avatar>
										<AvatarImage src={user.user.avatar || "https://github.com/shadcn.png"} />
										<AvatarFallback>CN</AvatarFallback>
									</Avatar>
								</DropdownMenuTrigger>
								<DropdownMenuContent>
									<DropdownMenuLabel>
										<p className="w-full flex justify-center">{user.user.fullName || "My Account"}</p>
										<p>{user.user.email}</p>
									</DropdownMenuLabel>
									<DropdownMenuSeparator />
									<DropdownMenuItem asChild>
										<Link to="/profile" 							>
											<FaRegUser className="mr-2" /> Profile
										</Link>
									</DropdownMenuItem>
									<DropdownMenuItem asChild>
										<Link to="/" 							>
											<FaPlus className="mr-2" /> Create Blog
										</Link>
									</DropdownMenuItem>
									<DropdownMenuSeparator />
									<DropdownMenuItem asChild>
										<button onClick={handleLogout} className="w-full" >
											<IoLogOutOutline color="red" className="mr-2" /> Logout
										</button>
									</DropdownMenuItem>

								</DropdownMenuContent>
							</DropdownMenu>
						</> :
						<>
							<Button className="ml-4 rounded-l">
								<Link to="/login">
									Login
								</Link>
							</Button>
							<Button className="ml-4 rounded-l bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-50 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors border border-gray-700 dark:border-gray-50">
								<Link to="/register">
									Register
								</Link>
							</Button>
						</>
					}
					<button
						className="ml-4 flex items-center px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
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
				</nav>



				{/* Hamburger menu for mobile */}
				<button
					className="md:hidden ml-2 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
					aria-label={menuOpen ? "Close menu" : "Open menu"}
					onClick={() => setMenuOpen((open) => !open)}
				>
					{menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
				</button>
			</div>


			{/* Mobile menu dropdown */}
			{menuOpen && (
				<nav className="md:hidden absolute left-0 right-0 top-16 bg-white dark:bg-gray-900 shadow-lg z-40 flex flex-col items-center gap-2 py-4 animate-fade-in">
					{navLinks.map((link) => (
						<Link
							key={link.name}
							to={link.href}
							className={`block w-full text-center py-2 px-4 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium ${location.pathname === link.href
								? "bg-gray-100 dark:bg-gray-800 text-blue-700 dark:text-blue-400"
								: ""
								}`}
							onClick={() => setMenuOpen(false)}
							aria-current={location.pathname === link.href ? "page" : undefined}
						>
							{link.name}
						</Link>
					))}
					<Button className="text-center mt-2 mb-1 rounded-l">
						Login
					</Button>
					<Button className="text-center mb-1 rounded-l bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-50 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors border border-gray-700 dark:border-gray-50">
						Register
					</Button>
					<button
						className="mt-2 flex items-center px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
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
				</nav>
			)}
		</header>
	);
};

export default Navbar;
