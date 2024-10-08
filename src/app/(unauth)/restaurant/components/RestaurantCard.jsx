import React from 'react'
import Image from 'next/image'
import images from '../../../../../public/images'
import Tags from '../../../components/restaurants/Tags'
import Rating from '@/app/components/Rating'

const RestaurantCard = ({info}) => {
  return (
    <div className='w-[min(95%,356px)] shadow-md p-3 bg-bg-light rounded-lg'>
        <Image className='object-cover w-full' src={info.image}  height={161} alt="branch image" />
        <h3 className='text-lg text-dark-text font-medium mt-2'>{info.name}</h3>
        <div>
            <span className='flex gap-2 text-light-text'>
                <Image src={images.location_pin} alt='pin' />
                {info.location}
            </span>
            <span className='flex gap-2 text-light-text'>
                <Image src={images.clock}  className='object-contain' alt='pin' />
                {info.time}
            </span>
        </div>
        <div className='flex gap-1 my-3 '>
            {
                info.benefits.map((tag, index) => <Tags key={index} Text={tag} />)
            }
        </div>
        <Rating />
        
    </div>
  )
}

export default RestaurantCard