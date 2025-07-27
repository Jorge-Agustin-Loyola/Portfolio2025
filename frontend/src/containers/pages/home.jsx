import React from 'react'

import Nav_home from '../../components/home/nav_home'
import AboutMe_component from '../../components/aboutMe/aboutMe_component'
import Navbar_vertical from '../../components/Navigation/navbar_vertical'
import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import Portfolio from '../../components/portfolio/portfolio_component'
import Blog_component from '../../components/blog/blog_component'
import Contact_component from '../../components/contact/contact_component'
import Nav_lineal from '../../components/Navigation/nav_lineal'

const Home = () => {

  // LOGICA PARA MOSTRAR LA BARRA DE NAVEGACION VERTICAL
  const [showNavbar, setShowNavbar] = useState(false)
  const scrollContainerRef = useRef(null)


  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrolledPastFirstScreen = container.scrollTop > window.innerHeight * 0.1;
      setShowNavbar(scrolledPastFirstScreen);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [])

  // LOGICA PARA scroll smooth

  const sectionRefs ={
    home: useRef(null),
    portfolio: useRef(null),
    aboutMe: useRef(null),
    blog: useRef(null),
    contact: useRef(null)
  }

  const scrollTo = (section)=>{
    sectionRefs[section]?.current?.scrollIntoView({ behavior: 'smooth'})
  }


  // RETURN

  return (
    <div ref={scrollContainerRef} className='h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory'>
      
      {/* HOME */}

      <div ref={sectionRefs.home} className="flex w-full  h-screen snap-start relative">
        <div className='w-[3%] h-full '>
          <div className=' w-full h-[33%]'></div>
          <div className="bg-yellow-500 w-full h-[33%]"></div>
          <div className=' w-full h-[33%]'></div>
        </div>
        {/* bg-[#f2f3f4] */}
        <div className="flex w-[94%] h-screen  ">

          {/* NOMBRE Y DESCRIPCION */}
          <div className='flex flex-col  justify-center text-left w-[45%] p-[40px]'>
            <h1 id='h1_home' className='text-3xl text-yellow-500 p-[5px] my-[30px] '>HI THERE</h1>
            <h2 id='h2_home' className='text-5xl text-yellow-500 p-[5px] my-[10px]'><span className='text-black'> I'M</span> AGUSTIN LOYOLA</h2>
            <h3 id='h3_home' className='bg-yellow-400 text-black-500 font-bold p-[5px] mt-[10px] mb-[5px] my-[10px] rounded-[15px]'>PROGRAMMING TECHNICIAN / WEB DEVELOPER</h3>
            <h3 id='h3_home_2' className='bg-black text-yellow-400 font-bold p-[5px] mt-[5px] mb-[30px] rounded-[15px]'>READY TO START YOUR NEW PROYECT</h3>
            <p id='p_home' className='text-sm  p-[5px]'>I'm a passionate full stack web developer with experience in building dynamic, responsive, and user-friendly applications using modern technologies like React, Django, and Tailwind CSS. I enjoy turning ideas into functional digital experiences and continuously improving my skills.

            </p>

          </div>

          {/* FOTO y BOTONES */}
          <div className='w-[55%]  p-[40px] flex items-center justify-center '>
            <Nav_home  scrollTo ={scrollTo}/>
          </div>

        </div>
        <div className='w-[3%] h-full'>
          <div className=' w-full h-[33%]'></div>
          <div className="bg-yellow-500 w-full h-[33%]"></div>
          <div className=' w-full h-[33%]'></div>
        </div>

        {/* NAVBAR IZQUIERDO */}

        <AnimatePresence>
          {showNavbar && (


            <div className='fixed w-[20%] z-10 top-0 left-0 '>
              <motion.nav
                initial={{ opacity: 0, rotateY: -90, transformOrigin: "left" }}
                animate={{ opacity: 1, rotateY: 0 }}
                exit={{ opacity: 0, rotateY: -90, transition: { duration: 0.3 } }}
                transition={{ duration: 1, ease: "easeOut" }}
                className=" top-0   shadow-lg z-50"
              >
                
                <Navbar_vertical scrollTo ={scrollTo} />

              </motion.nav>
            </div>
          )}
        </AnimatePresence>
        
        {/* // NAV_LINEAL */}

        <AnimatePresence>
          {showNavbar && (
            <div className='fixed  z-10 absolute top-30 right-5 '>
              <motion.nav
                initial={{ opacity: 0, rotateY: -90, transformOrigin: "right" }}
                animate={{ opacity: 1, rotateY: 0 }}
                exit={{ opacity: 0, rotateY: -90, transition: { duration: 0.3 } }}
                transition={{ duration: 1, ease: "easeOut" }}
                className=" top-0 right-0   z-50"
              >

                <Nav_lineal scrollTo={scrollTo} />

              </motion.nav>
            </div>
          )}
        </AnimatePresence>

      </div>
      
      {/* PORTFOLIO */}
      <section ref={sectionRefs.portfolio} className="h-screen snap-start"><Portfolio /></section>
      
      {/* ABOUT ME */}
      <section ref={sectionRefs.aboutMe} className="h-screen snap-start"><AboutMe_component /></section>
     
      {/* BLOG */}
      <section ref={sectionRefs.blog} className="h-screen snap-start"><Blog_component /></section>
      
      {/* CONTACT */}
      <section ref={sectionRefs.contact} className="h-screen snap-start"><Contact_component /></section>

    </div>

  )
}

export default Home