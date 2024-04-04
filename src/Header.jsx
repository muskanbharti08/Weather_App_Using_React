import React from 'react'

export default function Header({color}) {

    let bg = color? "bg-zinc-800" :"bg-blue-700";
    let text = color? "text-gray-100" : "text-neutral-300" ;
  return (
    <div className={`${bg} text-2xl transition-all duration-1000 font-bold text-center p-2 ${text}`}>
    Weather App
    </div>
  )
}
