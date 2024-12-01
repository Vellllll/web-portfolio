'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from 'clsx';

const links = [{
        name: 'Dashboard',
        href: '/',
    },{
        name: 'Projects',
        href: '/projects',
    }
]

export default function NavLinks() {
    const pathname = usePathname();
    return (
        <>
            {
                links.map(link => {
                    return (
                        <Link 
                            key={link.name} 
                            href={link.href}
                            className={clsx(
                                'rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white',
                                {
                                    'text-white bg-gray-900' : pathname == link.href,
                                }
                            )}
                        >
                            {link.name}
                        </Link>
                    )
                })
            }
        </>
    )
}