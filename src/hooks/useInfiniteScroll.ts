import React, { useState, useEffect } from 'react';
import {
  ALL_POSTS,
  INITIAL_POSTS,
  TO_BE_LOADED
} from '../constants/infinite-scroll-options';

export const useInfiniteScroll = () => {
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(INITIAL_POSTS);

  const handleScroll = (e: Event) => {
    const scrollHeight = (e.target as Document).documentElement.scrollHeight;
    const currentHeight = Math.ceil(
      (e.target as Document).documentElement.scrollTop + window.innerHeight
    );
    if (currentHeight + 1 >= scrollHeight) {
      setLoading(true);
    }
  };

  useEffect(() => {
    if (!loading) return;

    if (count + TO_BE_LOADED >= ALL_POSTS) {
      setCount(ALL_POSTS);
    } else {
      setCount(count + TO_BE_LOADED);
    }

    setLoading(false);
  }, [loading]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { count };
};
