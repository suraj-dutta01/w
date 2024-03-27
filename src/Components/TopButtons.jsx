import React from 'react'

function TopButtons({setQuery}) {
    let citys=[
        {
            id:1,
            title:"Kolkata"
        },
        {
            id:2,
            title:"Mumbai"
        },
        {
            id:3,
            title:"Bengaluru"
        },
        {
            id:4,
            title:"Delhi"
        },
        {
            id:5,
            title:"Chennai"
        }
    ]
  return (
    <div className='flex justify-around items-center my-6'>
      {citys.map((city)=>{
        return(
            <button key={city.id} onClick={()=>setQuery({q:city.title})} className='text-white text-lg font-medium'>{city.title}</button>
        )
      })}
    </div>
  )
}

export default TopButtons

