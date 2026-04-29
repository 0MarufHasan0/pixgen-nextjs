import { Button, Card, Chip, Separator } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
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
              <Link href={`/all-photos/${photo.id}`}>
                <Button variant='outline' className='w-full mt-4'>View Details</Button>
              </Link>
            </Card>
        </div>
    );
};

export default PhotoCard;