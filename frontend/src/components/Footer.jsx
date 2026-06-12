import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm'>

        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-blue-800 leading-6'>“Medilux is a modern healthcare platform that helps patients connect with trusted doctors, book appointments online, and access secure teleconsultations. With technology and care combined, we make healthcare simple, reliable, and accessible anytime, anywhere.”</p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5 text-blue-600'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li className='text-blue-600'>Home</li>
            <li className='text-blue-600'>About us</li>
            <li className='text-blue-600'>Delivery</li>
            <li className='text-blue-600'>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5 text-blue-600'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li className='text-blue-600'>+1-212-456-7890</li>
            <li className='text-blue-600'>biharinavnit28@gmail.com</li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024 @ Medilux.com - All Right Reserved.</p>
      </div>

    </div>
  )
}

export default Footer
