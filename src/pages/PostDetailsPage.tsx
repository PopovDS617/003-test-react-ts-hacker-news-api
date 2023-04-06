import React from 'react';
import { Link, useLocation, useNavigation } from 'react-router-dom';
import { transformDate } from '../utils/transformDate';
import Comments from '../components/Comment/Comments';

export const PostDetailsPage = () => {
  const location = useLocation();
  const routerState = location.state;

  const { url, title, time, by, descendants, kids } = routerState;

  return (
    <div className="bg-slate-300 p-5 rounded-lg">
      <Link to="/">
        <span className="bg-green-400 p-2 rounded-md hover:bg-green-600 font-bold">
          ← go back
        </span>
      </Link>
      <article>
        <h2 className=" text-center text-3xl   my-4 font-bold italic ">
          {title}
        </h2>
        <h3>
          <span className="font-bold">Link: </span>
          <a href={url} className="text-blue-500" target="_blank">
            {url}
          </a>
          <h4>
            <span className="font-bold">Published by: </span>
            {by}
          </h4>
        </h3>
        <time>
          <span className="font-bold">Date:</span> {transformDate(time)}
        </time>
        <p>
          <span className="font-bold">Comments:</span> {descendants}
        </p>
      </article>
      {kids && <Comments commentsIds={kids} />}
    </div>
  );
};
