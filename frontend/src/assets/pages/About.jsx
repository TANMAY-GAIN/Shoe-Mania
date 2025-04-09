import React from 'react'
import Title from '../../contents/Title'
import {assets} from '../assets'
import NewsLetter from '../../contents/NewsLetter'
const About = () => {
  return (
    <div>
      <div className='text-2xl ext-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.menu} alt="" />
        <div className='flex flex-col justofy-center gap-6 md:text-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, ab cumque incidunt quam quas esse illum soluta nemo perspiciatis quo, dolorum ullam voluptatem perferendis, neque earum repellat facere. Modi, labore?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore debitis veniam, tenetur, harum deserunt ullam reprehenderit alias nihil dolores eveniet in sapiente odit tempora, quia sequi vero itaque enim? Numquam.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium sunt, reiciendis nobis optio est alias voluptates soluta, explicabo nesciunt illum cumque consectetur. Laudantium quas consectetur dolores, tempore voluptates et soluta!</p>
        </div>
      </div>

      <div className='text-2xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-0 md:px-16 py-8 md:py-20 flex flex-col gap-5'>
          <p>Quality Assurence</p>
          <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum suscipit praesentium reiciendis enim eveniet tempore nisi sunt mollitia sapiente dolorum, harum cumque obcaecati rerum corrupti repellat fugiat minima nulla porro?</p>
        </div>
        <div className='border px-0 md:px-16 py-8 md:py-20 flex flex-col gap-5'>
          <p>Convenience:</p>
          <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum suscipit praesentium reiciendis enim eveniet tempore nisi sunt mollitia sapiente dolorum, harum cumque obcaecati rerum corrupti repellat fugiat minima nulla porro?</p>
        </div>
        <div className='border px-0 md:px-16 py-8 md:py-20 flex flex-col gap-5'>
          <p>Exceptional Customer Service:</p>
          <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum suscipit praesentium reiciendis enim eveniet tempore nisi sunt mollitia sapiente dolorum, harum cumque obcaecati rerum corrupti repellat fugiat minima nulla porro?</p>
        </div>
      </div>

      <NewsLetter/>
    </div>
  )
}

export default About