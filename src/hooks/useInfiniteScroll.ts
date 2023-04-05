import { useState, useEffect } from 'react';
import { ALL_POSTS, POSTS_BATCH } from '../constants/infinite-scroll-options';
import { debounce } from '../utils/debounce';

export const useInfiniteScroll = () => {
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(POSTS_BATCH);

  const handleScroll = debounce(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      loading
    ) {
      return false;
    }

    setLoading(true);
  }, 500);

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
