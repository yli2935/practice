/*
 * @Author: Li yli2935@uwo.ca
 * @Date: 2023-06-07 11:02:24
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2023-06-07 11:46:43
 * @FilePath: /practie/practice/src/App.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import "./App.css";
import Navbar from "./modules/views/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./modules/pages/Home";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Navbar />
      {/* <Home></Home> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          {/* <Route path="/services"  />
          <Route path="/products"  />
          <Route path="/sign-up"  /> */}
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
