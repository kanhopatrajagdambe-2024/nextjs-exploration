import Link from 'next/link'
import React from 'react'
// import {Baskerville} from "next/font/google"
import {Roboto} from "next/font/google"

export default function NavigationBar() {
  return (
    <header className='grid grid-cols-2 text-xl p-5 font-medium text-sky-500 bg-gray-900 '>
    <div>
      Riddhi's Traditional wear 
    </div>
     <nav>
        <ul className='flex gap-20 p-10'>
            <li>
                <Link href="/">Home</Link>
            </li>
             <li>
                <Link href="/about">About</Link>
            </li>
             <li>
                <Link href="/contact">Contact</Link>
            </li>
            <li>
                <Link href="/developers">Our Developers</Link>
            </li>
             <li>
                <Link href="/services">Services</Link>
            </li>
        </ul>
     </nav>
    </header>
  )
}
