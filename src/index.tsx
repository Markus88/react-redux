import { render } from "react-dom";
import { createStore, applyMiddleware, Store } from "redux";
import { Provider } from "react-redux";

import App from "./App";
import {
  ArticleAction,
  ArticleState,
  DispatchType,
} from "./components/article/store/actionsCreators";
import { articleReducer } from "./components/article/store/reducer";

const store: Store<ArticleState, ArticleAction> & {
  dispatch: DispatchType;
} = createStore(articleReducer, applyMiddleware());

const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

// const store: Store<ArticleState, ArticleAction> & {
//   dispatch: DispatchType;
// } = createStore(articleReducer, applyMiddleware());

// const store: Store<ArticleState, ArticleState> & {
//   dispatch: DispatchType
// } = createStore(reducer, applyMiddleware)

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
