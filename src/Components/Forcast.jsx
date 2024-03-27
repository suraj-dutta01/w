import React from 'react'
import { iconUrlFromCode } from '../Servicess/WeatherServices';

function Forcast({title,items}) {  
  return (
    <div>
      <div className="flex items-center justify-start mt-6 ">
        <p className='text-white font-medium uppercase'>{title}</p>
      </div>
      <hr className='my-2'/>
      <div className="flex flex-row items-center justify-between text-white">
        {items.map((i)=>{
          return(
            <div className="flex flex-col items-center justify-center">
          <p className='font-light text-sm'>
              {i.title}
          </p>
          <img src={iconUrlFromCode(i.icon)} className='w-10 my-1' alt="" />
          <p className='font-medium '>{`${Math.round(i.temp)}°`}</p>
        </div>
          )
        })}
      </div>
    </div>
  )
}

export default Forcast
