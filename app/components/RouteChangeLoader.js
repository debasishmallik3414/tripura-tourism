// components/RouteChangeLoader.js
'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Loader from './loader';

const RouteChangeLoader = () => {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 1000); // delay to simulate loading
    return () => clearTimeout(timeout);
  }, [pathname]);

  return loading ? <Loader /> : null;
};

export default RouteChangeLoader;
