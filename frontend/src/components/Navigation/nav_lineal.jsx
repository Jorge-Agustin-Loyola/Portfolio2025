import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav_lineal = ({scrollTo}) => {
    return (
        <div className='w-auto relative'>
            {/* LINEA GUIA */}
            <svg
                viewBox="0 0 3.7041748 139.3362"
                className="w-auto sm:w-[14px] md:w-[18px] h-[400px]"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g transform="translate(-95.51457,-25.433074)">
                    <rect
                        className="fill-[#280b0b]"
                        width="1.0583333"
                        height="132.29167"
                        x="96.834984"
                        y="28.932405"
                    />
                    <circle
                        className="fill-[#280b0b]"
                        cx="97.366661"
                        cy="27.285156"
                        r="1.8520833"
                    />
                    <circle
                        className="fill-[#280b0b]"
                        cx="97.366669"
                        cy="162.91719"
                        r="1.8520833"
                    />
                </g>
            </svg>
            {/* ICONOS */}
            {/* HOME */}


            <NavLink onClick={() => scrollTo('home')} className='bg-black absolute right-[-11px] top-10 p-2 rounded-full'>

                <svg
                    fill="#f0b100"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    id="home-alt-3"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                >
                    <path
                        d="M21.71,11.29l-9-9a1,1,0,0,0-1.42,0l-9,9a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,13H4v7.3A1.77,1.77,0,0,0,5.83,22H8.5a1,1,0,0,0,1-1V16.1a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1V21a1,1,0,0,0,1,1h2.67A1.77,1.77,0,0,0,20,20.3V13h1a1,1,0,0,0,.92-.62A1,1,0,0,0,21.71,11.29Z"
                        className="#f0b100"
                    />
                </svg>
            </NavLink>

            {/* PORTFOLIO */}

            <NavLink onClick={() => scrollTo('portfolio')} className='bg-black absolute right-[-11px] top-27 p-2 rounded-full'>
                <svg
                    className='fill-[#f0b100] h-[25px] w-[25px]  '

                    viewBox="0 0 32 32" xml:space="preserve">
                    <g>
                        <path d="M26,9h-2.6c-1.2-3-4.1-5-7.4-5c-3.3,0-6.2,2-7.4,5H6c-1.7,0-3,1.3-3,3v0.6C3,16.1,5.9,19,9.4,19h13.3
                        c3.5,0,6.4-2.9,6.4-6.4V12C29,10.3,27.7,9,26,9z M16,6c2.2,0,4.1,1.2,5.2,3H10.8C11.9,7.2,13.8,6,16,6z"/>
                        <path d="M23,21C23,21,23,21,23,21l0,2c0,0.6-0.4,1-1,1s-1-0.4-1-1v-2H11v2c0,0.6-0.4,1-1,1s-1-0.4-1-1v-2c0,0,0,0,0,0
                        c-2.4-0.1-4.5-1.2-6-2.9V25c0,1.7,1.3,3,3,3h20c1.7,0,3-1.3,3-3v-6.9C27.5,19.8,25.4,20.9,23,21z"/>
                    </g>
                </svg>
            </NavLink>

            {/* ABOUT ME */}

            <NavLink onClick={() => scrollTo('aboutMe')} className='bg-black absolute right-[-11px] top-45 p-2 rounded-full'>
                <svg fill="#f0b100" width="25px" height="25px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><title>ionicons-v5-j</title><path d="M332.64,64.58C313.18,43.57,286,32,256,32c-30.16,0-57.43,11.5-76.8,32.38-19.58,21.11-29.12,49.8-26.88,80.78C156.76,206.28,203.27,256,256,256s99.16-49.71,103.67-110.82C361.94,114.48,352.34,85.85,332.64,64.58Z" /><path d="M432,480H80A31,31,0,0,1,55.8,468.87c-6.5-7.77-9.12-18.38-7.18-29.11C57.06,392.94,83.4,353.61,124.8,326c36.78-24.51,83.37-38,131.2-38s94.42,13.5,131.2,38c41.4,27.6,67.74,66.93,76.18,113.75,1.94,10.73-.68,21.34-7.18,29.11A31,31,0,0,1,432,480Z" />
                </svg>
            </NavLink>

            {/* BLOG */}

            <NavLink onClick={() => scrollTo('blog')} className='bg-black absolute right-[-11px] top-63 p-2 rounded-full'>
                <svg
                    width="25px"
                    height="25px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g id="roll_brush" data-name="roll brush">
                        <line x1="5.24" y1="11.08" x2="18.66" y2="11.08" fill="none" stroke="#f0b100" strokeMiterlimit="10" strokeWidth="1.92" />
                        <line x1="5.24" y1="18.76" x2="18.66" y2="18.76" fill="none" stroke="#f0b100" strokeMiterlimit="10" strokeWidth="1.92" />
                        <line x1="5.24" y1="14.92" x2="18.66" y2="14.92" fill="none" stroke="#f0b100" strokeMiterlimit="10" strokeWidth="1.92" />
                        <rect x="1.4" y="1.49" width="21.1" height="21.1" fill="none" stroke="#f0b100" strokeMiterlimit="10" strokeWidth="1.92" />
                        <polygon points="22.5 7.25 16.23 7.25 14.31 7.25 1.4 7.25 1.4 1.49 22.5 1.49 22.5 7.25" fill="none" stroke="#f0b100" strokeMiterlimit="10" strokeWidth="1.92" />
                        <line x1="4.28" y1="4.37" x2="6.2" y2="4.37" fill="none" stroke="#f0b100" strokeMiterlimit="10" strokeWidth="1.92" />
                        <line x1="8.11" y1="4.37" x2="10.03" y2="4.37" fill="none" stroke="#f0b100" strokeMiterlimit="10" strokeWidth="1.92" />
                        <line x1="11.95" y1="4.37" x2="13.87" y2="4.37" fill="none" stroke="#f0b100" strokeMiterlimit="10" strokeWidth="1.92" />
                    </g>
                </svg>
            </NavLink>
            {/* CONTACT */}

            <NavLink onClick={() => scrollTo('contact')} className='bg-black absolute right-[-11px] top-80 p-2 rounded-full'>
                <svg width="25px" height="25px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">

                    <title>send-email</title>
                    <desc>Created with Sketch Beta.</desc>
                    <defs>

                    </defs>
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
                        <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-570.000000, -257.000000)" fill="#f0b100">
                            <path d="M580.407,278.75 C581.743,281.205 586,289 586,289 C586,289 601.75,258.5 602,258 L602.02,257.91 L580.407,278.75 L580.407,278.75 Z M570,272 C570,272 577.298,276.381 579.345,277.597 L601,257 C598.536,258.194 570,272 570,272 L570,272 Z" id="send-email" sketch:type="MSShapeGroup">

                            </path>
                        </g>
                    </g>
                </svg>
            </NavLink>



        </div>
    )
}

export default Nav_lineal