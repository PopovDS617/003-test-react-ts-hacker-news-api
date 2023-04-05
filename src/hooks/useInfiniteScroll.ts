import React, { useState, useEffect } from 'react';
import {
  ALL_POSTS,
  POSTS_BATCH,
  INITIAL_BATCH
} from '../constants/infinite-scroll-options';

export const useInfiniteScroll = () => {
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(INITIAL_BATCH);

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

    if (count + POSTS_BATCH >= ALL_POSTS) {
      setCount(ALL_POSTS);
    } else {
      setCount(count + POSTS_BATCH);
    }

    setLoading(false);
  }, [loading]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { count };
};
