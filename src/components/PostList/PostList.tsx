import React, { useState, useEffect } from 'react';
import { useAsync } from '../../hooks/useAsync';
import { getIDs } from '../../utils/getIDs';
import { SinglePost } from '../SinglePost/SinglePost';
import { RefreshIcon } from '../Icons/RefreshIcon';
import { BounceLoader } from 'react-spinners';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';
import { Link } from 'react-router-dom';

export const PostList = () => {
  const { loading, error, value, refreshHandler } = useAsync(getIDs, 60000, []);

  const { count } = useInfiniteScroll();

  return (
    <div className="flex flex-col justify-center align-middle">
      <div
        className="sticky top-5 left-0 z-50 cursor-pointer  hover:text-green-500 h-10 w-10 hover:rotate-90   transition-all duration-300"
        onClick={refreshHandler}
      >
        <RefreshIcon />
      </div>
      {error && (
        <div className="flex justify-center text-2xl font-bold">Error</div>
      )}
      {loading && (
        <div className="flex justify-center mt-10">
          <BounceLoader color="#969c9f" size={80} />
        </div>
      )}

      <ul>
        {value.slice(0, count).map(id => {
          return (
            <li
              key={id}
              className="md:h-40 sm:h-20 bg-slate-700   hover:shadow-2xl hover:shadow-black  p-5 my-3 hover:bg-green-600 hover:text-black text-white hover:-translate-y-2 hover:translate-x-2 transition duration-200 rounded-lg"
            >
              <SinglePost postId={id} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
