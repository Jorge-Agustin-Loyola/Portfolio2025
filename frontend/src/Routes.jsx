import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutMain from "./hocs/layout/layoutMain";
import Home from "./containers/pages/home"

import FeaturedProyects from "./containers/pages/featuredProyects";
import AboutMe from "./containers/pages/aboutMe";
import TechnicalStack from "./containers/pages/technicalStack";
import Blog from "./containers/pages/blog";
import Contact from "./containers/pages/contact";

function All_Routes() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutMain/>} >

            <Route index element={<Home/>}/>
            <Route path="/FeaturedProyects" element={<FeaturedProyects/>}/>
            <Route path="/AboutMe" element={<AboutMe/>}/>
            <Route path="/TechnicalStack" element={<TechnicalStack/>}/>
            <Route path="/Blog" element={<Blog/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            
          </Route>
          
        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default All_Routes
