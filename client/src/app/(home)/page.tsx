'use client';

import { RoutesAppPage } from '@/features/route-app';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    fetch('http://localhost:8080/api/vehicles')
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  }, []);
  return <RoutesAppPage />;
}
