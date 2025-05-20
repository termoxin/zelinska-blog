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
        <li className={pathname === '/impostor-syndrome' ? 'active' : ''}>
          <Link href="/impostor-syndrome">Синдром самозванца</Link>
        </li>
        <li className={pathname === '/burnout' ? 'active' : ''}>
          <Link href="/burnout">Выгорание</Link>
        </li>
        <li className={pathname === '/inner-critic' ? 'active' : ''}>
          <Link href="/inner-critic">Внутренний критик</Link>
        </li>
        <li className={pathname === '/rest-guilt' ? 'active' : ''}>
          <Link href="/rest-guilt">Вина за отдых</Link>
        </li>
      </ul>
    </nav>
  );
} 