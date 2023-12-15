import React from 'react'
import leftmain from '../asset/home/leftmain.png'
import faded from '../asset/home/elipse.png'
import left_small from '../asset/home/left.png'
import rightTop from '../asset/home/top.png'
import rightsmall from '../asset/home/topsmall.png'
import leftOnly from '../asset/home/vectorleft.png'
import left_elipse from '../asset/home/vectorsmall.png'
import tri from '../asset/home/triangle.png'
import squareB from '../asset/home/squareb.png'
import square from '../asset/home/square.png'
import arrow from '../asset/home/arrow.png'

const Home = () => {
    return (
        <>
            <div className="w-full min-h-[100vh] relative flex items-center justify-center">

                {/* Background design */}
                <div className="absolute top-0 right-[-5px] z-2 " > <img src={leftmain} alt="left" />
                    <div className="absolute bottom-[-20px] left-[-50px] z-[-1]" > <img src={faded} alt="faded" /></div>
                    <div className="absolute bottom-0 right-[40%] z-[2]" > <img src={left_small} alt="small" /></div>
                </div>
                <div className="absolute top-0 left-[20%]">
                    <img src={rightTop} alt="top" />
                    <div className="absolute bottom-0 right-[30%]">
                        <img src={rightsmall} alt="right" />
                    </div>
                </div>
                <div className="absolute left-[-50px] top-[30%]">
                    <img src={leftOnly} alt="small" />
                    <div className="absolute right-[-100%] top-[-10%]">
                        <img src={left_elipse} alt="elipse" />
                    </div>
                </div>
                {/* Background design */}

                <div className="z-[1] flex items-center justify-between max-w-[1300px] mx-auto gap-7">
                    <div className="w-[50%] flex-col items-center justify-start">
                        <h2 style={{ letterSpacing: '5px' }} className='text-4xl font-semibold stretch leading-[40px] tracking-widest ' > LOOP2 - <br /> Play the long game</h2>
                        <hr className='h-[2.5px] w-[80%] mt-4 gradient' />
                        <p className='text-md capitalize my-5  text-gray-900'> How to amplify your energy with perspective</p>
                        <div className='mt-12 flex gap-4'>
                            <button className="btn">Get Started</button>
                            <button className="w-[200px] px-8 py-3 shadow-md rounded-3xl text-gray-900 text-base bg-white tracking-wider font-semibold text-md">Book a Call</button>
                        </div>
                    </div>
                    <div className="w-[500px] h-[280px] blurry flex items-center justify-center rounded-xl relative ">
                        <button disabled className='rounded-full w-[100px] h-[100px] bg-pink-500 flex items-center justify-center overflow-hidden'> <img className='mx-[5px] w-[50%]' src={tri} alt="play" /> </button>
                        <div className="absolute w-[200px] h-[80px] top-[-80px] right-[0]">
                            <img src={arrow} alt="arrow" className='absolute bottom-[2px] left-0' />
                            <h5 className='absolute top-0 left-[30%] text-white text-xl'>MUST WATCH</h5>
                            <img src={square} alt="box" className='absolute bottom-[10%] right-[-20%]' />
                            <img src={squareB} alt="boxB" className='absolute bottom-[-60%] right-[-45%]' />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home