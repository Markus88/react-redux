import { IArticle } from "../../../client/article/article-dto";

// ActionTypes
export enum articleActionTypes {
  AddArticle = "ADD_ARTICLE",
  RemoveArticle = "REMOVE_ARTICLE",
}

// Action
export type ArticleAction = {
  type: string;
  article: IArticle;
};

// Den holder den aktuelle data/state
export type ArticleState = {
  articles: IArticle[];
};

// Actions Creators
export const addArticle = (article: IArticle): ArticleAction => {
  const action: ArticleAction = {
    type: articleActionTypes.AddArticle,
    article: article, // Ved godt jeg ikke behøver at skrive den igen, da de deler navn. Men er bare nemmere at læse i første omgang.
  };
  return action;
};

// Denner er "ens" men den ovenover, men bare skrevet i en kortere version.
export const removeArticle = (article: IArticle): ArticleAction => ({
  type: articleActionTypes.RemoveArticle,
  article,
});

// Den her skal slettes, byttes ud, eller fundet en alternativ løsning.
export type DispatchType = (args: ArticleAction) => ArticleAction;
