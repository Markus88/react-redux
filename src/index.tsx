import "./index.css";
import {
  ArticleAction,
  ArticleState,
  DispatchType,
} from "./components/article/store/actionsCreators";
import { applyMiddleware, Store, createStore } from "redux";
import { Provider } from "react-redux";
import { articleReducer } from "./components/article/store/reducer";
import { render } from "@testing-library/react";

const store: Store<ArticleState, ArticleAction> = createStore(
  articleReducer,
  applyMiddleware()
);

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
