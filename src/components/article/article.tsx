import { Dispatch, FC, useCallback } from "react";
import { IArticle } from "../../client/article/article-dto";
import { useDispatch } from "react-redux";

type Props = {
  article: IArticle;
  removeArticle: (article: IArticle) => void;
};

export const Article: FC<Props> = ({ article, removeArticle }) => {
  const dispatch: Dispatch<any> = useDispatch();

  const deleteArticle = useCallback(
    (article: IArticle) => dispatch(removeArticle(article)),
    [dispatch, removeArticle]
  );

  return (
    <div className="Article">
      <div>
        <h1>{article.title}</h1>
        <p>{article.body}</p>
      </div>
      <button onClick={() => deleteArticle(article)}>Delete</button>
    </div>
  );
};
