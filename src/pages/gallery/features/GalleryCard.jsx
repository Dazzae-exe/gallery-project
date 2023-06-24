import React from 'react'

function GalleryCard(props) {

  return (
    <div className={props.className} style={{...props.row[props.size]}}>
        <img src={props.imageUrl} alt="..." className='w-full h-full bg-no-repeat object-center object-cover' />
    </div>
  )
}

export default GalleryCard;