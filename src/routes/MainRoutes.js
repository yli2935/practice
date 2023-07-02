/*
 * @Author: Li yli2935@uwo.ca
 * @Date: 2023-06-21 16:50:33
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2023-07-02 17:06:32
 * @FilePath: /practie/practice/src/routes/MainRoutes.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import MainLayout from '../modules/pages/MainLayout';
import linkedListRoutes from './LinkedListRoutes';
import binarySearchRoutes from './BinarySearchRoutes';
import StackRoutes from './StackRoutes';
// render - dashboard
// const Code = Loadable(lazy(() => import('../modules/pages/Code')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/main',
    element: <MainLayout />,
    children: [
        {
          path: 'linkedList',
          children: linkedListRoutes
        },
        {
          path: 'binarySearch',
          children: binarySearchRoutes
        },
        {
          path: 'Stack',
          children: StackRoutes
        },
        
    ]
};
export default MainRoutes;