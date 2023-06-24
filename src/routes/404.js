/*
 * @Author: Li yli2935@uwo.ca
 * @Date: 2023-06-24 17:51:16
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2023-06-24 17:51:25
 * @FilePath: /practie/practice/src/routes/404.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE*
 */


import Home from "../modules/pages/Home";

const NotFoundRoutes = {
    path: '*',
    element: <Home />,

};
  
export default NotFoundRoutes;