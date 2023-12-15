import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import logoPng from '../asset/logo.png'

const Navbar = () => {
    return (
        <div className="w-full fixed z-[1]">
            <div className="nav">
                <div className="logo overflow-hidden"><img src={logoPng} alt="logo" className='w-full' /></div>
                <div className="links">
                    <Link className='w-[100px] py-3 text-center text-sm text-black' to='/login'>Login</Link>
                    <Link className='w-[140px] py-3 text-center text-sm bg-white text-pink-500 rounded-md shadow-sm tracking-wide' to='/signup'>Sign Up</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar