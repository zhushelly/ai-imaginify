"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { SignedIn } from '@clerk/nextjs'
import { navLinks } from '@/constants'
import { Sign } from 'crypto'
import { PathnameContext } from 'next/dist/shared/lib/hooks-client-context.shared-runtime'
import { clerkClient } from '@clerk/nextjs/server'

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <div className="flex size-full flex-col gap-4">
        <Link href="/" className="sidebar-logo">
          <Image src="/assets/images/logo-text.svg" alt="logo" width={180} height={28} />
        </Link>

        <nav className="sidebar-nav">

          <SignedIn>
            <ul className="sidebar-nav_elements">
              {navLinks.map((link) => {
                const isActive = link.route === pathname
                return (
                  <li key={link.route} className={`sidebar-nav_element group ${
                    isActive ? 'bg-purple-gradient text-white' : 'text-gray-700'
                  }`}>
                    <Link className="sidebar-link" href={link.route}>
                      <Image
                        src={link.icon}
                        alt="logo"
                        width={24}
                        height={24}
                        className={`${isActive && 'brightness-200'}`}
                      />
                      {link.label}

                    
                    </Link>

                  </li>
                )
              })}

            </ul>
          </SignedIn>


        </nav>

      </div>
      
    </aside>
    
  )
}

export default Sidebar