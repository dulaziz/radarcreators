import React, {useState} from 'react'
import Link from 'next/link'

//react icons
import {AiFillDashboard, AiOutlineCloudUpload, AiOutlineDoubleLeft} from 'react-icons/ai'
import {FaFilm} from 'react-icons/fa'

export default function Sidebar () {
  const [open, setOpen] = useState(true);

  const Menus = [
      {
      title: "Dashboard", link: "/", icon: AiFillDashboard
      },
      {
      title: "Upload", link: "/upload", icon: AiOutlineCloudUpload
      },
  ];

  return (
    <div className={`${open ? 'w-72' : 'w-20'} px-5 py-9 duration-300 h-screen bg-slate-800 relative`}>
        <div className={`absolute cursor-pointer rounded-full -right-3 top-9 p-1 border-2 border-slate-800 text-slate-800 bg-white ${!open && 'rotate-180'}`} onClick={() => setOpen(!open)}>
          <AiOutlineDoubleLeft />
        </div>

        <div className='flex gap-x-3 items-center w-72 mb-6'>
          <div className='text-3xl text-white w-10 flex justify-center'>
            <FaFilm />
          </div>
          <h1 className={`text-lg text-white uppercase font-semibold ${!open && 'scale-0'} origin-left duration-300`}>Radar Creators</h1>
        </div>
          <hr className='border-1 border-slate-600'/>
        <ul className='my-6'>
          {Menus.map((menu, index) => (
          <li key={index} className='text-slate-300 text-md mb-2 cursor-pointer p-1 hover:bg-white/20 rounded-md'>
            <Link href={menu.link} className='flex gap-x-4 items-center'>
              <div>{React.createElement(menu?.icon, {size: "32"})}</div>
              <span className={`${!open && "scale-0"} origin-left duration-300`}>
                {menu.title}
              </span>
            </Link>
          </li>
          ))}
        </ul>
    </div>
  )
}
