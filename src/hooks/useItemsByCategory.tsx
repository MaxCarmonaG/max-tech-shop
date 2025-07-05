import { useEffect, useState } from 'react';
import { itemsByCategoryObserver } from '@/libs/firebase';
import { ItemType } from '@/types';

export const useItemsByCategory = (category: string) => {
  const [items, setItems] = useState<ItemType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = itemsByCategoryObserver(
      category,
      (newItems: ItemType[]) => {
        setItems(newItems);
        setIsLoading(false);
      }
    );

    return () => {
      unsubscribe();
    };
  }, [category]);

  return { items, isLoading };
};
