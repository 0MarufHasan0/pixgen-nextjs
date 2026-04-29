"use client"

import { UpdateUSerModal } from '@/components/UpdateUSer';
import { authClient } from '@/lib/auth-client';
import { Avatar, Card } from '@heroui/react';
import React from 'react';

const ProfilePage = () => {
      const userData = authClient.useSession()
      //  console.log(userData)
      const user = userData.data?.user
    return (
        <div>
            <Card className='max-w-96 mx-auto items-center flex flex-col   border mt-5'>
                       <Avatar className="h-20 w--20">
                        <Avatar.Image
                          alt="Blue"
                          src={user?.image}
                          referrerPolicy="no-referrer"
                        />
                        <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                      </Avatar>
                      <h2 className='text-xl font-bold'>{user?.name}</h2>
                      <p className='text-muted'>{user?.email}</p>

                      <UpdateUSerModal/>

            </Card>
        </div>
    );
};

export default ProfilePage;