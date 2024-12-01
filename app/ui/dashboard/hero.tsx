'use client';
import { openSans, inter } from "@/app/ui/fonts";
import { useState } from "react";
import Card from "@/app/ui/card";

const cardList = [
    {
        key: 1,
        header: '1st header',
        body: '1lorem ipsum dolot sit amet'
    },
    {
        key: 2,
        header: '2st header',
        body: '2lorem ipsum dolot sit amet'
    },
    {
        key: 3,
        header: '3st header',
        body: '3lorem ipsum dolot sit amet'
    },
]

export default function Hero() {
    const [isOpenDetails, setOpenDetails] = useState(false);

    const openDetails = () => {
        setOpenDetails(!isOpenDetails);
        console.log(isOpenDetails);
    }

    return (
        <>
            <div className="container mx-auto py-[150px]">
                <div className="flex justify-center mb-3">
                    <img className="rounded-full" src="https://picsum.photos/200" alt="Picsum" />
                </div>
                <p className={`${openSans.className} text-center font-[800] text-4xl`}>Back-End Developer</p>
                <p className={`${inter.className} text-center font-[200] text-lg mb-3`}>Building APIs for your web and app!</p>
                <div className="hover:cursor-pointer" onClick={openDetails}>
                    <p className={`${inter.className} text-center font-[200] text-sm`}>Details</p>
                    {
                        !isOpenDetails && (
                            <>
                                <div className="flex justify-center space-x-5 mb-5 mt-5">
                                    {cardList.map(card => {
                                        return (
                                            <Card key={card.key} header={card.header} body={card.body} />
                                        )
                                    })}
                                </div>
                            </>
                        )
                    }
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3 text-white block m-auto">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
            </div>
        </>
    )
}