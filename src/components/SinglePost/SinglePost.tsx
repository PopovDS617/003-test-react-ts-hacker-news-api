import React, { memo, useState, useEffect } from 'react';
import { Post } from '../../models/post';
import { getPostData } from '../../utils/getPostData';
import { transformDate } from '../../utils/transformDate';

type Props = {
  postId: number;
};

export const SinglePost = memo((props: Props) => {
  const [postData, setPostData] = useState<Post | null>();

  useEffect(() => {
    getPostData(props.postId).then(data => setPostData(data));
  }, []);

  return (
    <>
      <section className="cursor-pointer  ">
        {postData ? (
          <p className="text-xl sm:l font-bold py-2">{postData.title}</p>
        ) : (
          <p className="text-md sm:l font-bold   bg-white text-white opacity-50 rounded-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          </p>
        )}
        {postData ? (
          <ul>
            <li className=" my-1">
              <span className="font-bold">Rating:</span> {postData.score}
            </li>
            <li className=" my-1">
              <span className="font-bold">Posted by:</span> {postData.by}
            </li>
            <li className=" my-1"> {transformDate(postData.time)}</li>
          </ul>
        ) : (
          <ul>
            <li className="    my-1   bg-white text-white opacity-30 rounded-lg">
              Lorem ipsum dolor sit
            </li>
            <li className="  my-1   bg-white text-white opacity-30 rounded-lg">
              Lorem ipsum dolor sit amet
            </li>
            <li className="   my-1   bg-white text-white opacity-30 rounded-lg">
              Lorem ipsum dolor sit
            </li>
          </ul>
        )}
      </section>
    </>
  );
});
