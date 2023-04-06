import React, { useState, useEffect } from 'react';
import { TComment } from '../../models/comment';
import { getData } from '../../utils/getData';
import { transformDate } from '../../utils/transformDate';

type Props = {
  id: number;
};

export const SingleComment = (props: Props) => {
  const [commentData, setCommentData] = useState<TComment | null>();
  const [isNestedShown, setIsNestedShown] = useState(false);

  useEffect(() => {
    getData(props.id).then(data => setCommentData(data));
  }, []);

  const showNested = () => {
    setIsNestedShown(!isNestedShown);
  };

  return (
    <div className="pl-6">
      {commentData ? (
        <div className="bg-slate-300 p-4 rounded-lg">
          <span className="text-2xl font-bold p-1 rounded-md bg-slate-500">
            {commentData.by}
          </span>

          <span className="text-xl font-bold p-1 rounded-md  ">
            {transformDate(commentData.time)}
          </span>
          <p className="my-2 bg-slate-400 p-1 rounded-md">{commentData.text}</p>
          {commentData.kids && !isNestedShown && (
            <div className="text-center">
              <button
                className="bg-green-600  p-1 rounded-lg"
                onClick={showNested}
              >
                show more
              </button>
            </div>
          )}
          <ul>
            {commentData.kids &&
              isNestedShown &&
              commentData.kids.map(c => {
                return (
                  <li key={c}>
                    <SingleComment id={c} />
                  </li>
                );
              })}
          </ul>
        </div>
      ) : null}
    </div>
  );
};
