'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();
  
  return (
    <nav className="site-navigation">
      <ul>
        <li className={pathname === '/' ? 'active' : ''}>
          <Link href="/">Обо мне</Link>
        </li>
        <li className={pathname === '/chronic-anxiety' ? 'active' : ''}>
          <Link href="/chronic-anxiety">Хроническая тревога</Link>
        </li>
      </ul>
    </nav>
  );
} 