import React from 'react';
import { useAsync } from '../../hooks/useAsync';
import { getIDs } from '../../utils/getIDs';
import { SinglePost } from '../SinglePost/SinglePost';

export const PostList = () => {
  const { loading, error, value } = useAsync(getIDs, 3600, []);

  return (
    <div>
      {value.map(item => {
        return <SinglePost postId={item} />;
      })}
    </div>
  );
};
