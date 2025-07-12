import {Routes, Route } from "react-router-dom";
import LayoutMain from "./hocs/layout/layoutMain";
import Home from "./containers/pages/home"
import FeaturedProyects from "./containers/pages/featuredProyects";
import AboutMe from "./containers/pages/aboutMe";
import TechnicalStack from "./containers/pages/technicalStack";
import Blog from "./containers/pages/blog";
import Contact from "./containers/pages/contact";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";


function All_Routes() {
  
  const location = useLocation();

  useEffect(() => {
    const root = document.getElementById('root');

    if (location.pathname !== '/') {
      root.classList.add('flex')
    }else{
      root.classList.remove('flex')
    }

    

  }, [location]);

  return (
    <>
      
        <Routes>
            <Route index element={<Home/>}/>
          
          <Route path="/" element={<LayoutMain/>} >
            

              <Route path="/FeaturedProyects" element={<FeaturedProyects/>}/>
              <Route path="/AboutMe" element={<AboutMe/>}/>
              <Route path="/TechnicalStack" element={<TechnicalStack/>}/>
              <Route path="/Blog" element={<Blog/>}/>
              <Route path="/Contact" element={<Contact/>}/>
            
            
          </Route>
          
        </Routes>
      
      
    </>
  )
}

export default All_Routes
