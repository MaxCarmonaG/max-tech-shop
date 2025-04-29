import { useEffect, useState } from 'react';
import { featuredObserver } from '@/libs/firebase';
import { ItemType } from '@/types';

const useFeatured = () => {
  const [featuredItems, setFeaturedItems] = useState<ItemType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = featuredObserver((data) => {
      setFeaturedItems(data);
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return { featuredItems, isLoading };
};

export default useFeatured;
