import React from 'react'
import Card from './Card'
const Hero = () => {
  return (
    <div>
<div className='w-full  '>

    <img
    className='w-full h-96 bg-red-200'
     src="https://media.istockphoto.com/id/1133538328/vector/people-climbing-books-isolated-on-white-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=mXpBTbIcV32Bj48j2dckKkZcqJj0l9XnDJt3NG1skeg="/>
</div>


<h1 className='text-black text-2xl m-10'>Best Platform</h1>
{/* card */}

<div className='grid grid-cols-4 gap-10 m-auto'>
<Card/>
<Card/>
<Card/>
<Card/>
</div>
    </div>
  )
}

export default Hero