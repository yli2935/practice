/*
 * @Author: Li yli2935@uwo.ca
 * @Date: 2023-06-07 11:02:24
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2023-06-24 18:30:10
 * @FilePath: /practie/practice/src/index.jsvv
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider as ReduxProvider } from "react-redux";
import { store } from './store';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </React.StrictMode>
);
