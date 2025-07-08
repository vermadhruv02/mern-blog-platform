import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import Home from "./pages/Home"
import Login from "./pages/Login"
import OtherLayout from "./layout/OtherLayout"
import Register from "./pages/Register"
import CreatePost from "./pages/CreateBlog"
// import Profile from "./pages/Profile"
function App() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          {/* <Route  path="/profile" element={<Profile/>} /> */}
          <Route  path="/about" element={<h1>About Page</h1>} />
          <Route  path="/contact" element={<h1>Contact Page</h1>} />
          <Route  path="/services" element={<h1>Services Page</h1>} />
          <Route  path="/blog" element={<h1>Blog Page</h1>} />
          <Route  path="/blog/create" element={<CreatePost />} />
          <Route  path="/blog/:id" element={<h1>Blog Detail Page</h1>} />
          <Route  path="/blog/category/:category" element={<h1>Blog Category Page</h1>} />
          <Route  path="/blog/author/:author" element={<h1>Blog Author Page</h1>} />
          <Route  path="/blog/tag/:tag" element={<h1>Blog Tag Page</h1>} />
          <Route  path="/blog/search/:query" element={<h1>Blog Search Page</h1>} />
          <Route  path="/blog/archive/:year/:month" element={<h1>Blog Archive Page</h1>} />
          <Route  path="/blog/featured" element={<h1>Featured Blog Page</h1>} />
          <Route  path="/blog/popular" element={<h1>Popular Blog Page</h1>} />
          <Route  path="/blog/recent" element={<h1>Recent Blog Page</h1>} />  
        </Route> 
                
        <Route  element={<OtherLayout />}> 
          <Route path="/login" index element={<Login />} />
          <Route  path="/register" element={<Register/>} />
        </Route>
      
      </Routes>
    </Router>

    </>
  )
}

export default App
