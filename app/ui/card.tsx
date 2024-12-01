'use client';
import { inter } from "@/app/ui/fonts";

export default function Card ({header, body}: {
    header: string,
    body: string
}) {
    return (
        <>
            <div className={`${inter.className} font-[200] card bg-white text-black p-5 rounded-xl`}>
                <div className="card-header">
                    {header}
                </div>
                <div className="card-body">
                    {body}
                </div>
            </div>
        </>
    )
}