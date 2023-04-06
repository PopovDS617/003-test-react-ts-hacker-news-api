import React, { useEffect, useState } from 'react';
import { SingleComment } from './SingleComment';

type Props = {
  commentsIds: number[];
};

const Comments = (props: Props) => {
  return (
    <div>
      <ul>
        {props.commentsIds.map(c => {
          return (
            <li key={c}>
              <SingleComment id={c} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Comments;
