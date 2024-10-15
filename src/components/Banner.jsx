import React from 'react'

function Banner() {
  return (
    <div className='h-[20vh] md:h-[75vh] bg-cover bg-center flex items-end' style={{backgroundImage : `url(https://image.tmdb.org/t/p/original/wWba3TaojhK7NdycRhoQpsG0FaH.jpg`}}>
         <div className='text-white text-2xl text-center w-full bg-gray-900/60 p-4 '>EXPLORE</div>
    </div>
  )
}

export default Banner