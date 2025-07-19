import React from 'react'
import perfil from '../../assets/img/blog/perfil.jpg'

const Navbar_vertical = () => {
  return (
    <div className=' flex flex-col justify-center flex-1 h-screen bg-yellow-500'>
      <div className=' h-[33%] bg-gray-500 flex items-center justify-center '>

        <img src={perfil} alt="" className='w-[170px] h-[170px] rounded-full object-cover border-4 border-white' />

      </div>
      <nav className='p-2 flex flex-col gap-6 justify-center items-center  my-auto'>

        <a id='item_nav_vertical1' className='p-2 font-semibold flex flex-col items-center gap-2' href="">
          <svg
            className="w-[10px] h-[40px] text-black fill-current"
            viewBox="0 0 16.350164 50.249077"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform="translate(-89.981732,-29.036936)">
              <path
                className="fill-current"
                d="M 96.089018,60.897698 95.915459,45.20902 94.685119,44.597029 c -5.182327,-2.577772 -6.31075,-9.266853 -2.236945,-13.260201 1.61588,-1.583967 3.155745,-2.222279 5.533705,-2.293853 2.00463,-0.06034 3.258881,0.323406 4.952621,1.515274 3.7454,2.635602 4.49306,7.551496 1.74773,11.491422 -0.84223,1.208709 -2.34527,2.367351 -3.71342,2.862546 -0.74324,0.26901 -0.74984,0.382215 -0.91156,15.644354 l -0.162911,15.37338 c 0,0 -3.484699,13.950021 -3.805321,-15.032253 z"
              />
            </g>
          </svg>


          HOME </a>
        <a id='item_nav_vertical3' className='p-2 font-semibold' href="">PORTFOLIO</a>
        <a id='item_nav_vertical2' className='p-2 font-semibold' href="">ABOUT ME</a>
        <a id='item_nav_vertical4' className='p-2 font-semibold' href="">BLOG</a>
        <a id='item_nav_vertical5' className='p-2 font-semibold flex flex-col items-center gap-2' href="">
          CONTACTO
          <svg
            className="w-[10px] h-[40px] text-black fill-current rotate-180"
            viewBox="0 0 16.350164 50.249077"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform="translate(-89.981732,-29.036936)">
              <path
                className="fill-current"
                d="M 96.089018,60.897698 95.915459,45.20902 94.685119,44.597029 c -5.182327,-2.577772 -6.31075,-9.266853 -2.236945,-13.260201 1.61588,-1.583967 3.155745,-2.222279 5.533705,-2.293853 2.00463,-0.06034 3.258881,0.323406 4.952621,1.515274 3.7454,2.635602 4.49306,7.551496 1.74773,11.491422 -0.84223,1.208709 -2.34527,2.367351 -3.71342,2.862546 -0.74324,0.26901 -0.74984,0.382215 -0.91156,15.644354 l -0.162911,15.37338 c 0,0 -3.484699,13.950021 -3.805321,-15.032253 z"
              />
            </g>
          </svg>

        </a>

      </nav>
    </div>
  )
}

export default Navbar_vertical