import React from 'react'
import Image from 'next/image'

export default function Image({src, alt, width, height}) {
  return (
    <div>
       <Image
            src={src}
            alt={alt}
            className="max-sm:w-[0.7rem] block"
            width={width}
            height={height}
            priority
          />
    </div>
  )
}
