import Image from 'next/image';
import React from 'react';

const PageDetails = async ({params}) => {
    const {id} = await params
     const res = await fetch ('https://pixgen-nextjs.vercel.app/data.json')
    const photos = await res.json()

    const photo = photos.find((photo) => photo.id === parseInt(id))

    console.log(id)
    return (
        <div>
          <h1 className='text-2xl font-bold m-4'>{photo.title}</h1>
          <Image
            src={photo.imageUrl}
            alt={photo.title}
            width={200}
            height={200}
            className='object-cover rounded-xl'
          />
          <p className='mt-4'>{photo.prompt}</p>
        </div>
    );
};

export default PageDetails;