import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

import { ThemeProvider } from "@/components/theme-provider";


const MainLayout = () => {
  return (
    <>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <SidebarProvider>
      <div className="min-h-screen w-full flex flex-col bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
        {/* Topbar always visible */}
        <Navbar />
        <div className="flex flex-1 min-h-0 w-full">
          <AppSidebar />
          <div className="flex-1 flex flex-col min-h-0">
            <SidebarTrigger className="md:hidden" />
            <main className="flex-1 w-full   min-h-0">
              <Outlet />
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </SidebarProvider>
    </ThemeProvider>
    </>
  )
}

export default MainLayout
