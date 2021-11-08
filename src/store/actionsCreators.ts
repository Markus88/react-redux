// ActionTypes
enum articleActionTypes {
  AddArticle = "ADD_ARTICLE",
  RemoveArticle = "REMOVE_ARTICLE",
}

// Action
export type ArticleAction = {
  type: string;
  article: IArticle;
};

// Actions Creators
export const addArticle = (article: IArticle): ArticleAction => {
  const action: ArticleAction = {
    type: articleActionTypes.AddArticle,
    article: article, // Ved godt jeg ikke behøver at skrive den igen, da de deler navn. Men er bare nemmere at læse i første omgang.
  };
  return action;
};

export const removeArticle = (article: IArticle): ArticleAction => ({
  type: articleActionTypes.RemoveArticle,
  article,
});
