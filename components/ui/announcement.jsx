"use client"
import { cn } from '@/lib/utils';
import { Cross1Icon } from '@radix-ui/react-icons'
import React, { useEffect, useState } from 'react'

const Announcement = () => {
    const [isClosed, setIsClosed] = useState(false);
    const hasVisitedBefore = sessionStorage.getItem('hasVisited');

    useEffect(() => {
        // Check if the user has visited before by looking for a cookie

        // If the user hasn't visited before, show the announcement
        if (!hasVisitedBefore) {
            setIsClosed(false);
        } else {
            setIsClosed(true);
        }
    }, [hasVisitedBefore]);
    

    if (hasVisitedBefore) {
        return null;
    }
    const handleClose = () => {
        // Set a cookie indicating that the user has visited
        sessionStorage.setItem('hasVisited', 'true');
        setIsClosed(true);
    };

    return (
        <div className={cn(
            "bg-teal-500/70 text-neutral-50 px-4 py-1 text-[0.6rem] md:py-2 md:text-[.8rem] md:px-8 md:text-center relative transition font-bold",
            isClosed && "hidden"
        )}>
            <p>This website is under development. Some features may not work properly.</p>
            <div className='absolute top-1/2 -translate-y-1/2 right-4' onClick={handleClose}>
                <Cross1Icon className='size-3 md:size-4 inline'/>
            </div>
        </div>
    );
}

export default Announcement;
