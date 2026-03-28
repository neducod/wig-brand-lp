import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import heroImage from '/src/assets/heroImage.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className='bg-pink-300'>
          <div className='flex justify-center items-center flex-col gap-10'>
            {/* DYNAMIC IMAGES */}
            <div>
              <h1>TO INSPIRE PEOPLE WITH GLAMOROUS MAKEUP</h1>
              <button>Learn More</button>
            </div>
            <img src={heroImage} alt="" />
          </div>
        </div>
        <p className='flex justify-center items-center p-6 bg-amber-700'>Lorem ipsum dolor, sit amet consectetur adipisicing elitAb omn is dicta reiciendis dolorem autem aliquam fugit pariatur!</p>
        <div className='flex flex-col gap-10 p-6 justify-center items-center'>
          <div className='w-[300px] px-4 py-5 bg-white flex flex-col gap-3 rounded-md shadow-[0px_0px_15px_rgba(0,0,0,0.09)]'>
            <p>100% Human Hair</p>
          </div>
          <div className='w-[300px] px-4 py-5 bg-white flex flex-col gap-3 rounded-md shadow-[0px_0px_15px_rgba(0,0,0,0.09)]'>
            <p>Free Delivery in Nigeria</p>
          </div>
          <div className='w-[300px] px-4 py-5 bg-white flex flex-col gap-3 rounded-md shadow-[0px_0px_15px_rgba(0,0,0,0.09)]'>
            <p>Beginner Friendly</p>
          </div>
          <div className='w-[300px] px-4 py-5 bg-white flex flex-col gap-3 rounded-md shadow-[0px_0px_15px_rgba(0,0,0,0.09)]'>
            <p>5-Star Reviews</p>
          </div>
        </div>

        <div>
          <div>
            <hr />
            <p>Best Section</p>
            <hr />
          </div>

        </div>

        <div>
          <h3>Real customer transformations</h3>
          {/* BEFORE AND BEFIVE SECTION */}
        </div>
        <div className='flex flex-col gap-10 p-6 justify-center items-center'>
          <div className='w-[300px] px-4 py-5 bg-white flex flex-col gap-3 rounded-md shadow-[0px_0px_15px_rgba(0,0,0,0.09)]'>
            <p>Easy install (glueless)</p>
          </div>
          <div className='w-[300px] px-4 py-5 bg-white flex flex-col gap-3 rounded-md shadow-[0px_0px_15px_rgba(0,0,0,0.09)]'>
            <p>Long-lasting hair</p>
          </div>
          <div className='w-[300px] px-4 py-5 bg-white flex flex-col gap-3 rounded-md shadow-[0px_0px_15px_rgba(0,0,0,0.09)]'>
            <p>No shedding</p>
          </div>
          <div className='w-[300px] px-4 py-5 bg-white flex flex-col gap-3 rounded-md shadow-[0px_0px_15px_rgba(0,0,0,0.09)]'>
            <p>Beginner-friendly</p>
          </div>
        </div>

        <div>
          {/* VIDEO SECTION */}
        </div>

        <div>
          {/* LIMITED OFFER SECTION  FULL WIDTH*/}
          <h3>“Get 20% Off Your First Order”</h3>
          <button>Shop Now</button>
        </div>
    </>
  )
}

export default App
