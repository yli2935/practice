/*
 * @Author: Li yli2935@uwo.ca
 * @Date: 2023-06-18 14:25:10
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2023-06-18 14:25:19
 * @FilePath: /practie/practice/src/modules/views/Header/AppBarStyled.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// material-ui
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';



const drawerWidth = 260;
// ==============================|| HEADER - APP BAR STYLED ||============================== //

const AppBarStyled = styled(AppBar, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));

export default AppBarStyled;