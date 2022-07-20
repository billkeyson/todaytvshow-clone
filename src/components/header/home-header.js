import React from 'react'

export default function HomeHeader(props) {
    const {header} = props
  return (
    <div className='md:h-[36rem] h-[26rem] relative mb-3 flex w-full'>
        <div className='w-full h-full md:w-1/2 bg-slate-100 contrast-50 md:contrast-100'>
            <img className='w-full h-full object-cover object-top' src={`https://image.tmdb.org/t/p/w500${header.poster_path}`}/>
        </div>
        <div className='absolute md:static text-white text-center top-1/4 left-1 w-full md:text-left md:pl-10 md:bg-gray-500'>
            <h2 className='font-semibold text-2xl md:text-6xl'>{header.original_title}</h2>
            <p className='max-w-xm md:text-2xl md:mt-20 '>
            {header.overview}
            </p>
        </div>
    </div>
  )
}
