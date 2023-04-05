import React, { memo, useState, useEffect } from 'react';
import { Post } from '../../models/post';
import { getPostData } from '../../utils/getPostData';

type Props = {
  postId: number;
};

export const SinglePost = memo((props: Props) => {
  const [postData, setPostData] = useState<Post | null>();

  useEffect(() => {
    getPostData(props.postId).then(data => setPostData(data));
  }, []);

  return <div>{postData ? postData.title : 'Loading'}</div>;
});
