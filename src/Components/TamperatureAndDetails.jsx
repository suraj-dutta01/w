import React from 'react'
import { 
    UilArrowUp,
    UilArrowDown,
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset } from '@iconscout/react-unicons'
import { formatToLocalTime, iconUrlFromCode } from '../Servicess/WeatherServices'
function TamperatureAndDetails({weather:{details,icon,temp,temp_min,temp_max,sunrise,sunset,speed,humidity,feels_like,timezone}}) {
  return (
    <div>
      <div className="flex justify-center items-center py-6 text-xl text-cyan-200">
         <p>{details}</p>
      </div>
      <div className="flex flex-row items-center justify-between py-3 text-white">
        <img className='w-14' src={iconUrlFromCode(icon)} alt="" />
        <p className='text-4xl'>{`${Math.round(temp)}°`}</p>

        <div className="flex flex-col space-y-2">
            <div className="flex font-light text-sm items-center justify-center">
                <UilTemperature size={18} className="mr-1"/>
                Real feel: <span className='font-medium ml-1'>{`${Math.round(feels_like)}°`}</span>
            </div>
            <div className="flex font-light text-sm items-center justify-center">
                <UilTear size={18} className="mr-1"/>
                Humidity: <span className='font-medium ml-1'>{`${Math.round(humidity)}%`}</span>
            </div>
            <div className="flex font-light text-sm items-center justify-center">
                <UilWind size={18} className="mr-1"/>
                Wind: <span className='font-medium ml-1'>{`${speed} Km/h`}</span>
            </div>
        </div>
      </div>
      <div className="flex justify-center items-center text-white flex-row space-x-2 text-sm py-3">
        <UilSun/>
        <p className='font-light'>Rise: <span className='font-medium ml-1'>{formatToLocalTime(sunrise,timezone,'hh:mm a')}</span> </p>
        <p className='font-light'>|</p>
        <UilSunset/>
        <p className='font-light'>Set: <span className='font-medium ml-1'>{formatToLocalTime(sunset,timezone,'hh:mm a')}</span> </p>
        <p className='font-light'>|</p>
        <UilArrowUp/>
        <p className='font-light'>High: <span className='font-medium ml-1'>{`${Math.round(temp_max)}°`}</span> </p>
        <p className='font-light'>|</p>
        <UilArrowDown/>
        <p className='font-light'>Low: <span className='font-medium ml-1'>{`${Math.round(temp_min)}°`}</span> </p>
      </div>
    </div>
  )
}

export default TamperatureAndDetails
