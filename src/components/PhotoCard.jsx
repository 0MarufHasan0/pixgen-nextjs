import { Button, Card, Chip, Separator } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { FaDownload } from 'react-icons/fa';
import { GiHearts } from 'react-icons/gi';

const PhotoCard = ({photo}) => {
    return (
        <div>
            <Card className=' border rounded-xl
            '>
                <div className='relative w-full aspect-square'>
                    <Image
                    src={photo.imageUrl}
                   fill
                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt={photo.title}
                    className='object-cover rounded-xl'
                    
                    
                    />
                    <Chip size='sm' className='absolute  top-2 right-5'>
                        {photo.category}
                    </Chip>
                </div>
                <div>
                    <h2 className='font-medium'>{photo.title}</h2>
                </div>
               <div className='flex gap-5'>
                 <div className='flex items-center gap-2'>
                    <p><GiHearts /></p>
                    <p>{photo.likes}</p>
                </div>
                <Separator orientation='vertical' />
                <div className='flex items-center gap-2'>
                    <p><FaDownload /></p>
                    <p>{photo.downloads}</p>
                </div>

               </div>
               <button className='mt-4 outline  py-2 px-4 rounded-lg hover:bg-blue-600'>
                    View
                </button>
            </Card>
        </div>
    );
};

export default PhotoCard;