import React from 'react'
import Image from 'next/image'

const MenuItem = ({item}) => {
  return (
    <div className='flex flex-col  w-[min(100%,354px)] bg-bg-light '>
        <Image className='object-cover flex:[0.5]'  src={item.image} alt={item.name} />
        <div className='flex:[0.5] p-5'>
            <div>
                <h2>{item.name}</h2>
                <span>{item.cuisine}</span>
                <p>
                    {item.desc}
                </p>
            </div>
            <div>
                <span>Per serving</span>
                <span>Rs {item.price}</span>
            </div>
        </div>
    </div>
  )
}

export default MenuItem