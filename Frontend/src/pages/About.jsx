import React from 'react'
import Tittle from '../components/Tittle'
import { assets } from '../assets/frontend_assets/assets'
import NewletterBox from '../components/NewletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 boreder-t'>
        <Tittle text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ut sit reprehenderit veniam dolor hic perspiciatis, obcaecati cumque eveniet odit recusandae labore atque totam illum. Enim vero rem nulla ipsum eveniet? Error, similique laudantium.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, numquam? Excepturi porro mollitia optio blanditiis rerum temporibus culpa harum alias, id doloribus, officiis iste. Laboriosam officiis autem vitae impedit dolorem.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere recusandae ratione, libero sequi assumenda aliquid voluptatibus quos? Labore sapiente, vel culpa officiis pariatur consectetur quis rerum est nesciunt nam nulla aut laboriosam maiores eos laudantium, veniam perspiciatis quod delectus omnis?</p>

        </div>
      </div>
      <div className='text-1xl py-4'>
        <Tittle text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurence:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, neque ab culpa quae molestiae iusto?</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, neque ab culpa quae molestiae iusto?</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, neque ab culpa quae molestiae iusto?</p>
        </div>
      </div>

      <NewletterBox />
    </div>
  )
}

export default About
