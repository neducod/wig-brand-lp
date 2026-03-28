import React, { useState } from 'react';

import footerImage from './assets/Gemini_Generated_Image_mi91rxmi91rxmi91.png'

import { RiTwitterXFill } from "react-icons/ri";

function FooterSection (){
    return (
        <div className='bg-[#fffef2] flex justify-start flex-col gap-6  p-6'>
            <h6 className='text-4xl'>Get ready to style for <span className='text-red-200'>hair</span> </h6>
            <div className='flex flex-col'>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium laborum natus, minus eos nostrum numquam quasi dolor ex fuga!</p>
                <div className='flex gap-4 py-6'>
                    <button className='relative inline-flex items-center justify-center gap-2 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#fcaa2d] hover:bg-[#F5F5F5] h-9 rounded-md px-3 group'>Explore Shop</button>
                    <button className='relative inline-flex items-center justify-center gap-2 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-pink-300 hover:bg-[#F5F5F5] h-9 rounded-md px-3 group'>Watch hair videos</button>
                </div>
            </div>
            <img src={footerImage} alt="" />
            <div className='flex flex-col gap-4'>
                <h6 className='text-base hidden'>Wig brand</h6>
                <ul className='flex flex-row gap-2'>
                    <li className='text-sm'>Email Us</li>
                    <li className='text-sm'>About</li>
                    <li className='text-sm'>Privacy policy</li>
                </ul>
                {/* TWO ICONS FOR ONLY LARGER SCREENS */}
            </div>
            <hr className='bg-[#ccb796]' />
            <h6 className='text-xl'>Wig brand</h6>
            <RiTwitterXFill />
            <div className='flex flex-col gap-2'>
                <h6 className='hidden sm:block'>Copyright @ 2026</h6>
                <ul className='flex flex-col gap-2'>
                    <li>Whatsapp</li>
                    <li>Status</li>
                    <li>Videos</li>
                </ul>
                <h6 className='sm:hidden py-4 text-sm'>Copyright @ 2026</h6>
            </div>
        </div>
    );
}

export default FooterSection;