import React from 'react'
import sampleTutors from "../utils/data"
const Card = () => {
 
 const tutor=sampleTutors[0]
 
    return (
    <div className='w-80 h-80 bg-gray-100'>

<div className=' object-cover flex justify-center h-1/2 w-full shadow-2xl '>
<img 
className='w-full rounded-2xl '
src={tutor.image.url}/>
</div>

<h3 className=" font-semibold mt-4 text-4xl">{tutor.academic}</h3>
      <p className="text-xl ">{tutor.description}</p>
      <p className="text-lg text-gray-500 ">
        {tutor.location}, {tutor.country}
      </p>
      <p className=" text-lg">Rating: {tutor.rating}⭐</p>

    </div>
  )
}

export default Card