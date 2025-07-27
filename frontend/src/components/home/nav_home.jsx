import React from 'react'
import { NavLink } from 'react-router-dom'
import perfil from '../../assets/img/blog/perfil.jpg'

const Nav_home = ({scrollTo}) => {
    return (
        <div className='w-[560px] h-[560px]  flex items-center justify-center relative'>
            <img src={perfil} alt="" className='w-[480px] h-[480px] rounded-full object-cover' />
            <svg
                width="550"
                height="550"
                className='absolute z-0 fill-current text-yellow-500'
                viewBox="0 0 70.576096 70.907997"
                version="1.1"
                id="svg1"

                xmlns="http://www.w3.org/2000/svg"
                xmlns:svg="http://www.w3.org/2000/svg"><defs
                    id="defs1" /><g
                        id="layer1"
                        transform="translate(-70.72193,-58.495137)"><path

                        d="m 104.02112,129.35695 c -3.88941,-0.26634 -9.408294,-1.70349 -12.980617,-3.38023 -8.336526,-3.91292 -15.487038,-11.6296 -18.467619,-19.92985 -1.353935,-3.7704 -1.845677,-6.914862 -1.850921,-11.83578 -0.01112,-10.429831 3.123171,-18.245657 10.139783,-25.285113 5.243762,-5.260832 10.695233,-8.186341 18.264583,-9.801608 3.675921,-0.784425 10.113941,-0.845191 13.493751,-0.12736 5.10881,1.08505 9.21642,2.801786 13.34536,5.577556 7.8786,5.296563 13.26702,13.845141 14.84,23.543218 0.21313,1.314027 0.37015,2.86539 0.34893,3.447474 -0.0308,0.845074 -0.0578,0.898389 -0.13378,0.264583 -0.60028,-5.004609 -1.79476,-8.928607 -4.06083,-13.34017 -5.79231,-11.276428 -18.05303,-18.819858 -30.55739,-18.800475 -8.728021,0.01353 -15.736035,2.52241 -22.621874,8.098669 -3.864372,3.129427 -7.6547,8.943202 -9.914022,15.206569 -4.299624,11.919561 -1.149838,25.920277 7.857862,34.927977 3.852236,3.85223 8.277979,6.40323 14.888451,8.58171 l 3.704163,1.2207 5.55625,-0.11849 c 4.68814,-0.1 6.06591,-0.22693 8.81822,-0.81255 1.79409,-0.38173 3.81815,-0.94488 4.49792,-1.25144 0.67977,-0.30656 1.6834,-0.71977 2.23028,-0.91823 2.02487,-0.73484 6.15051,-3.76266 9.22268,-6.76856 3.32463,-3.2529 4.20899,-4.4144 5.83571,-7.66449 2.57412,-5.14293 3.81965,-9.14827 4.35217,-13.995595 0.16676,-1.517959 0.21423,-1.626638 0.40453,-0.926042 0.26139,0.962337 -0.32217,5.048097 -1.09591,7.672917 -0.30027,1.01865 -0.72712,2.50559 -0.94855,3.30431 -0.58974,2.12725 -2.52327,6.06165 -3.99092,8.12083 -1.75354,2.46029 -5.61029,6.23028 -8.40164,8.21265 -3.47597,2.46856 -8.15711,4.69407 -11.80477,5.61224 -3.54218,0.89161 -8.01892,1.36679 -10.9718,1.16458 z"
                        id="path1" /></g>
            </svg>
            
            {/* ABOUT ME */}
            <NavLink onClick={() => scrollTo('aboutMe')} className='bg-yellow-500 absolute right-[-15px] p-2 rounded-full'>


                <svg fill="#000000" width="25px" height="25px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><title>ionicons-v5-j</title><path d="M332.64,64.58C313.18,43.57,286,32,256,32c-30.16,0-57.43,11.5-76.8,32.38-19.58,21.11-29.12,49.8-26.88,80.78C156.76,206.28,203.27,256,256,256s99.16-49.71,103.67-110.82C361.94,114.48,352.34,85.85,332.64,64.58Z" /><path d="M432,480H80A31,31,0,0,1,55.8,468.87c-6.5-7.77-9.12-18.38-7.18-29.11C57.06,392.94,83.4,353.61,124.8,326c36.78-24.51,83.37-38,131.2-38s94.42,13.5,131.2,38c41.4,27.6,67.74,66.93,76.18,113.75,1.94,10.73-.68,21.34-7.18,29.11A31,31,0,0,1,432,480Z" />
                </svg>
            </NavLink>
            
            {/* PORTFOLIO */}
            <NavLink onClick={() => scrollTo('portfolio')}  className='bg-yellow-500 absolute right-1 top-40 p-2 rounded-full'>

                <svg fill="#000000" height="25px" width="25px" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/  1999/xlink"
                    viewBox="0 0 32 32" xml:space="preserve">
                    <g>
                        <path d="M26,9h-2.6c-1.2-3-4.1-5-7.4-5c-3.3,0-6.2,2-7.4,5H6c-1.7,0-3,1.3-3,3v0.6C3,16.1,5.9,19,9.4,19h13.3
		                    c3.5,0,6.4-2.9,6.4-6.4V12C29,10.3,27.7,9,26,9z M16,6c2.2,0,4.1,1.2,5.2,3H10.8C11.9,7.2,13.8,6,16,6z"
                        />
                        <path d="M23,21C23,21,23,21,23,21l0,2c0,0.6-0.4,1-1,1s-1-0.4-1-1v-2H11v2c0,0.6-0.4,1-1,1s-1-0.4-1-1v-2c0,0,0,0,0,0
		                    c-2.4-0.1-4.5-1.2-6-2.9V25c0,1.7,1.3,3,3,3h20c1.7,0,3-1.3,3-3v-6.9C27.5,19.8,25.4,20.9,23,21z"
                        />
                    </g>
                </svg>
            </NavLink>


            {/* BLOG */}
            <NavLink onClick={() => scrollTo('blog')} className='bg-yellow-500 absolute right-1 bottom-40 p-2 rounded-full'>
                <svg
                    width="25px"
                    height="25px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g id="roll_brush" data-name="roll brush">
                        <line x1="5.24" y1="11.08" x2="18.66" y2="11.08" fill="none" stroke="#020202" strokeMiterlimit="10" strokeWidth="1.92" />
                        <line x1="5.24" y1="18.76" x2="18.66" y2="18.76" fill="none" stroke="#020202" strokeMiterlimit="10" strokeWidth="1.92" />
                        <line x1="5.24" y1="14.92" x2="18.66" y2="14.92" fill="none" stroke="#020202" strokeMiterlimit="10" strokeWidth="1.92" />
                        <rect x="1.4" y="1.49" width="21.1" height="21.1" fill="none" stroke="#020202" strokeMiterlimit="10" strokeWidth="1.92" />
                        <polygon points="22.5 7.25 16.23 7.25 14.31 7.25 1.4 7.25 1.4 1.49 22.5 1.49 22.5 7.25" fill="none" stroke="#020202" strokeMiterlimit="10" strokeWidth="1.92" />
                        <line x1="4.28" y1="4.37" x2="6.2" y2="4.37" fill="none" stroke="#020202" strokeMiterlimit="10" strokeWidth="1.92" />
                        <line x1="8.11" y1="4.37" x2="10.03" y2="4.37" fill="none" stroke="#020202" strokeMiterlimit="10" strokeWidth="1.92" />
                        <line x1="11.95" y1="4.37" x2="13.87" y2="4.37" fill="none" stroke="#020202" strokeMiterlimit="10" strokeWidth="1.92" />
                    </g>
                </svg>

            </NavLink>

            {/* HOME */}
            <NavLink  className='bg-yellow-500 absolute right-14 top-21 p-2 rounded-full'>

                <svg
                    fill="#000000"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    id="home-alt-3"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                >
                    <path
                        d="M21.71,11.29l-9-9a1,1,0,0,0-1.42,0l-9,9a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,13H4v7.3A1.77,1.77,0,0,0,5.83,22H8.5a1,1,0,0,0,1-1V16.1a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1V21a1,1,0,0,0,1,1h2.67A1.77,1.77,0,0,0,20,20.3V13h1a1,1,0,0,0,.92-.62A1,1,0,0,0,21.71,11.29Z"
                        className="#000000"
                    />
                </svg>

            </NavLink>

            {/* Messenger */}
            <NavLink onClick={() => scrollTo('contact')} className='bg-yellow-500 absolute right-14 bottom-21 p-2 rounded-full'>
                <svg width="25px" height="25px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">

                    <title>send-email</title>
                    <desc>Created with Sketch Beta.</desc>
                    <defs>

                    </defs>
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
                        <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-570.000000, -257.000000)" fill="#000000">
                            <path d="M580.407,278.75 C581.743,281.205 586,289 586,289 C586,289 601.75,258.5 602,258 L602.02,257.91 L580.407,278.75 L580.407,278.75 Z M570,272 C570,272 577.298,276.381 579.345,277.597 L601,257 C598.536,258.194 570,272 570,272 L570,272 Z" id="send-email" sketch:type="MSShapeGroup">

                            </path>
                        </g>
                    </g>
                </svg>
            </NavLink>
        </div>
    )
}

export default Nav_home