import { Outlet } from 'react-router-dom'
// import { FlickeringGrid } from "@/components/magicui/flickering-grid";
const OtherLayout = () => {
  return (
    <>
    <div className=" min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950 px-4 z-10">
      
      <Outlet />
    </div>
    </>
  )
}

export default OtherLayout;
