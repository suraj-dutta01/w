import React, { useState } from 'react'
import { UilSearch,UilMapMarker } from '@iconscout/react-unicons'
import { toast } from 'react-toastify';

function Inputes({setQuery,units,setUnits}) {
  const[city,setCity]=useState("")
  function onUnitChande(e) {
    const selectedUnit=e.currentTarget.name 
    if(units!==selectedUnit)setUnits(selectedUnit);
  }
  function handleLocationClick() {
    if(navigator.geolocation){
      toast.info("Fetching user location")
      navigator.geolocation.getCurrentPosition((position)=>{
        toast.success("Location fetch successfull")
        let lat=position.coords.latitude
        let lon=position.coords.longitude
        setQuery({lat,lon})
      })
    }
  }
  function onButtonClick() {
    if(city!=="")setQuery({q:city})  
  }
  return (
    <div className='flex flex-row justify-center my-6'>
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input type="text" value={city} onChange={(e)=>{setCity(e.target.value)}} placeholder='search....' className='text-xl font-light p-2 focus:outline-none w-full shadow-xl capitalize' />
        <UilSearch onClick={onButtonClick} size={25} className="text-white cursor-pointer transition ease-out hover:scale-125"/>
        <UilMapMarker onClick={handleLocationClick} size={25} className="text-white cursor-pointer transition ease-out hover:scale-125"/>
      </div>
      <div className="flex flex-row w-1/4 items-center justify-center">
        <button onClick={onUnitChande} name='metric' className='text-xl text-white font-light'>°C</button>
        <p className='text-xl mx-1 text-white'>‖</p>
        <button onClick={onUnitChande} name='imperial' className='text-xl text-white font-light'>°F</button>
      </div>
    </div>
  )
}

export default Inputes
