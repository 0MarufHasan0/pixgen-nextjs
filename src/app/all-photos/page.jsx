import Categories from '@/components/Categories';
import PhotoCard from '@/components/PhotoCard';
import React from 'react';

const AllPhoto = async ({searchParams}) => {
    const {category} = await searchParams
     const res = await fetch ('https://pixgen-nextjs.vercel.app/data.json')
    const photos = await res.json()

    const filteredPhotos = category ? photos.filter(photo => photo.category.toLowerCase() == category.toLowerCase()) :photos
    return (
        <div>
            <h1 className='text-2xl font-bold m-4'>All Photos</h1>

            <Categories/>

            <div className='grid grid-cols-4 gap-4'>
                {filteredPhotos.map((photo) => (
                    <PhotoCard key={photo.id} photo={photo} />
                ))}
            </div>
        </div>
    );
};

export default AllPhoto;