import { FormEvent, useState } from "react";
import { IArticle } from "../../client/article/article-dto";

type Props = {
  saveArticle: (article: IArticle | any) => void;
};

export const AddArticle: React.FC<Props> = ({ saveArticle }) => {
  const [article, setArticle] = useState<IArticle | {}>();

  const handleArticleData = (formEvent: FormEvent<HTMLInputElement>) => {
    setArticle({
      ...article,
      [formEvent.currentTarget.id]: formEvent.currentTarget.value,
    });
  };

  const addNewArticle = (formEvent: FormEvent) => {
    formEvent.preventDefault();
    saveArticle(article);
  };

  return (
    <form onSubmit={addNewArticle} className="Add-article">
      <input
        type="text"
        id="title"
        placeholder="Title"
        onChange={handleArticleData}
      />
      <input
        type="text"
        id="body"
        placeholder="Description"
        onChange={handleArticleData}
      />
      <button disabled={article === undefined ? true : false}>
        Add article
      </button>
    </form>
  );
};
