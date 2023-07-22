/*
 * @Author: Li yli2935@uwo.ca
 * @Date: 2023-06-28 13:02:04
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2023-07-19 15:23:16
 * @FilePath: /practice/src/modules/views/Drawer/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import PropTypes from 'prop-types';
import { useMemo } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Drawer, useMediaQuery } from '@mui/material';

// project import
import DrawerHeader from './DrawerHeader';
import DrawerContent from './DrawerContent';
import MiniDrawerStyled from './MiniDrawerStyled';


const MainDrawer = ({ open, handleDrawerToggle, window }) => {
    const theme = useTheme();
    const matchDownMD = useMediaQuery(theme.breakpoints.down('lg'));
    const drawerWidth = 260
    // responsive drawer container
    const container = window !== undefined ? () => window().document.body : undefined;
  
    // header content
    const drawerContent = useMemo(() => <DrawerContent />, []);
    const drawerHeader = useMemo(() => <DrawerHeader open={open} />, [open]);
  
    return (
      <Box component="nav" sx={{ flexShrink: { md: 0 }, zIndex: 1300 }} aria-label="mailbox folders">
        {!matchDownMD ? (
          <MiniDrawerStyled variant="permanent" open={open}>
            {drawerHeader}
            {drawerContent}
          </MiniDrawerStyled>
        ) : (
          <Drawer
            container={container}
            variant="temporary"
            open={open}
            onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true }}
            sx={{
              display: { xs: 'block', lg: 'none' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
                borderRight: `1px solid ${theme.palette.divider}`,
                backgroundImage: 'none',
                boxShadow: 'inherit',

 
              }
            }}
          >
            {open && drawerHeader}
            {open && drawerContent}
          </Drawer>
        )}
      </Box>
    );
  };
  
  MainDrawer.propTypes = {
    open: PropTypes.bool,
    handleDrawerToggle: PropTypes.func,
    window: PropTypes.object
  };
  
  export default MainDrawer;