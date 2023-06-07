/*
 * @Author: Li yli2935@uwo.ca
 * @Date: 2023-06-07 11:27:26
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2023-06-07 11:27:32
 * @FilePath: /practie/practice/src/modules/components/Toolbar.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { styled } from '@mui/material/styles';
import MuiToolbar from '@mui/material/Toolbar';

const Toolbar = styled(MuiToolbar)(({ theme }) => ({
  height: 64,
  [theme.breakpoints.up('sm')]: {
    height: 70,
  },
}));

export default Toolbar;