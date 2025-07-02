import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <Navbar />
      <main className="flex-1 w-full mx-auto px-4 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
