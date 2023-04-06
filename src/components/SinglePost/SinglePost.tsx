import React, { memo, useState, useEffect } from 'react';
import { TPost } from '../../models/post';
import { getData } from '../../utils/getData';
import { transformDate } from '../../utils/transformDate';
import { Link } from 'react-router-dom';

type Props = {
  postId: number;
};

export const SinglePost = memo((props: Props) => {
  const [postData, setPostData] = useState<TPost | null>(null);

  useEffect(() => {
    getData(props.postId).then(data => setPostData(data));
  }, []);

  return (
    <>
      {postData ? (
        <Link to={`/post/${postData.id}`} state={postData}>
          <section className="cursor-pointer  ">
            <p className="text-xl sm:l font-bold py-2">{postData.title}</p>
            <ul>
              <li className=" my-1">
                <span className="font-bold">Rating:</span> {postData.score}
              </li>
              <li className=" my-1">
                <span className="font-bold">Posted by:</span> {postData.by}
              </li>
              <li className=" my-1"> {transformDate(postData.time)}</li>
            </ul>
          </section>
        </Link>
      ) : (
        // пустая карточка на время подгрузки данных с API
        <section className="cursor-pointer  ">
          <p className="text-md sm:l font-bold my-2   bg-white text-white opacity-50 rounded-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          </p>
          <ul>
            <li>
              <span className="    my-1   bg-white text-white opacity-30 rounded-lg">
                Lorem ipsum dolor sit
              </span>
            </li>
            <li>
              <span className="    my-1   bg-white text-white opacity-30 rounded-lg">
                Lorem ipsum dolor sit amet
              </span>
            </li>
            <li>
              <span className="    my-1   bg-white text-white opacity-30 rounded-lg">
                Lorem ipsum dolor sit amet
              </span>
            </li>
          </ul>
        </section>
      )}
    </>
  );
});
