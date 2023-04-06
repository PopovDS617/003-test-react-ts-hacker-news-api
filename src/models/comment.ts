export type TComment = {
  id: number;
  by: string;
  kids: number[];
  parent: number;
  text: string;
  time: number;
};

export type TCommentList = TComment[];
