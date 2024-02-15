'use client';

import Link from 'next/link';
import './style.scss';
import { componentList } from '@/lib/constant';

export const Sidebar = () => {
  return (
    <div className='body'>
      <div className='list'>
        {componentList.map((items) => (
          <div key={items.title} className='itemList'>
            <Link href={items.link}>
              <h1 className='text'>{items.title}</h1>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
