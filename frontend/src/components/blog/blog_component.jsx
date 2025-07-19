import React from 'react'
import { NavLink } from 'react-router-dom'

const Blog_component = () => {
    return (
        <section className='bg-gray-300'>
            
            <div className='h-screen ml-[20%] mt-[20px] p-4 relative'>
                <h1 id='h1_blog_component' className='m-10 ml-12 p-2 text-[80px] '>
                    <svg
            className="w-[30px] h-[40px] text-black fill-current rotate-90 absolute top-25 left-5"
            viewBox="0 0 3.8379681 108.93936"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              className="fill-current"
              width="3.8379722"
              height="108.93936"
              x="0"
              y="0"
            />
          </svg>
          <svg
           className='w-[10px] h-[10px] text-black fill-current absolute mr-[10px]  left-14 top-[115px]'
            viewBox="0 0 14.466203 14.466197"
            version="1.1"

            xmlns="http://www.w3.org/2000/svg"
            xmlns:svg="http://www.w3.org/2000/svg">
            <defs
              id="defs1" />
            <g
              id="layer1"
              transform="translate(-98.606366,-101.8539)">
              <circle
                className="fill:#280b0b;stroke-width:0.264583"
                id="path1"
                cx="105.83947"
                cy="109.08698"
                r="7.2331014" />
            </g>
          </svg>
                    BLOG</h1>
                <div className='flex'>
                    <div>
                        <NavLink>
                            <img src="" alt="" />
                        </NavLink>
                    </div>
                    <div>
                        <NavLink>
                            <img src="" alt="" />
                        </NavLink>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Blog_component