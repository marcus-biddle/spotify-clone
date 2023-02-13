import React from 'react';
import { playlists } from '../data/mime';
import { AiFillHome } from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';
import { IoLibrary } from 'react-icons/io5';
import { BsPlusSquare, BsHeart } from 'react-icons/bs';
import { CgAlbum } from "react-icons/cg";

type Props = {}

export default function Sidebar({}: Props) {
    const navData = [
        {
            icon: <AiFillHome />,
            navTitle: "Home"
        },
        {
            icon: <FiSearch />,
            navTitle: "Search"
        },
        {
            icon: <IoLibrary />,
            navTitle: "Your Library"
        },
    ]
    const playlistData = [
        {
            icon: <BsPlusSquare />,
            navTitle: "Create Playlist"
        },
        {
            icon: <BsHeart />,
            navTitle: "Liked Songs"
        },
        {
            icon: <CgAlbum />,
            navTitle: "Your Episodes"
        },
    ]

  return (
    <div className=' h-screen w-[215px] bg-black text-white z-0'>
        {/* header - ... */}
        <div className=' cursor-pointer text-[2.3rem] font-light opacity-80 text-left pl-5'>
            ...
        </div>

        {/* Icons - List - Home/Search/Your Library */}
        <div className='pl-5'>
            {navData.map((item, index) => {
                return (
                    <ul className='flex items-center my-2 tracking-wide'>
                        <li className=' scale-125 cursor-pointer hover:opacity-100 opacity-80 hover:scale-150'>
                            {item.icon}
                        </li>
                        <li className=' pl-5 pt-1'>
                            <div className=' cursor-pointer hover:opacity-100 opacity-80'>
                            {item.navTitle}
                            </div>
                        </li>
                    </ul>
                )
            })}
        </div>
        <div className=' grid grid-cols-1 divide-y-[1px] pl-5'>
            <div className=' py-5'>
                {playlistData.map((item, index) => {
                        return (
                            <ul className='flex items-center my-2 tracking-wide'>
                                <li className=' scale-125 cursor-pointer hover:opacity-100 opacity-80 hover:scale-150'>
                                    {item.icon}
                                </li>
                                <li className=' pl-5 pt-1'>
                                    <div className=' cursor-pointer hover:opacity-100 opacity-80'>
                                        {item.navTitle}
                                    </div>
                                </li>
                            </ul>
                        )})}
            </div>
            <div className=' mr-5 h-[481px] overflow-y-auto'>
            <div className=' pt-3 '>
                {playlists.map((name) => {
                    return (
                        <div className=''>
                            <ul className='items-center my-3 tracking-wide'>
                                <li className=' cursor-pointer text-sm hover:opacity-100 opacity-80 '>
                                    {name.playlist}
                                </li>
                            </ul>
                        </div>
                    )
                })}
            </div>
            </div>
        </div>

        {/* Icons - List - Creat/Likes/Episodes */}

        {/* breaker line */}

        {/* Scrollbar list of music libraries */}
        
    </div>
  )
}