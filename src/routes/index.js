/*
 * @Author: Li yli2935@uwo.ca
 * @Date: 2023-06-21 16:46:51
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2023-06-24 17:52:56
 * @FilePath: /practie/practice/src/routes/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useRoutes } from 'react-router-dom';

// project import
import MainRoutes from './MainRoutes';
import HomeRoutes from './HomeRoutes';
import NotFound from './NotFound';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([HomeRoutes,MainRoutes,NotFound]);
}