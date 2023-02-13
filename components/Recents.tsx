import React from 'react'
import eg from '../data/img/eg-playlist.jpg';
import ar from '../data/img/acidrap.jpg';
import lc from '../data/img/logiccover.jpg';
import lp from '../data/img/heart.jpg';
import sc from '../data/img/swim.jpg';
import jc from '../data/img/jcole.png';

type Props = {}

const gridItems = [
    {
        image: eg.src,
        title: "Entergalactic"
    },
    {
        image: lp.src,
        title: "Liked Playlist"
    },
    {
        image: lc.src,
        title: "Logic Mix"
    },
    {
        image: sc.src,
        title: "Swimming Album"
    },
    {
        image: ar.src,
        title: "Acid Rap"
    },
    {
        image: jc.src,
        title: "J Cole"
    },
]

export default function Recents({}: Props) {
  return (
    <div className='grid grid-cols-3 gap-4'>
        {gridItems.map((item) => {
            return (
                <div className='flex flex-row cursor-pointer items-center opacity-70 hover:opacity-100'>
                    <img className=' w-24 h-[6.05rem] z-50 rounded-l-lg shadow-2xl shadow-black'
                    src={item.image}
                    alt=""
                    />
                        <div className='text-white font-semibold tracking-tighter pl-5 z-50'>
                            {item.title}
                        </div>
                        <div className=' absolute bg-neutral-600 h-[6.05rem] w-[24rem] shadow-2xl shadow-black ml-1 rounded-md opacity-40'>
                        </div>
                </div>
                
            );
        })}
    </div>
  )
}