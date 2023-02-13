import React, { useEffect, useState } from 'react';

type Props = {}

export default function Banner({}: Props) {
    const background = [
        "w-full bg-gradient-to-b from-cyan-500 to-neutral-900",
        "w-full bg-gradient-to-b from-fuchsia-600 to-neutral-900",
        "w-full bg-gradient-to-b from-rose-500 to-neutral-900",
        "w-full bg-gradient-to-b from-emerald-500 to-neutral-900",
      ];
      const [value, setValue] = useState(0);
    
      useEffect(() => {
        const interval = setInterval(() => {
          setValue((v) => (v === 3? 0 : v+1));
        }, 120000)
      }, []);

  return (
    <div className="w-full">
        <div className=' mx-16 pt-16 text-4xl text-white font-bold tracking-tighter'>
            Good evening
        </div>
        {/* 3x2 grid next */}
        <div className=' pt-56'>
            BRUH
        </div>
    </div>
  )
}