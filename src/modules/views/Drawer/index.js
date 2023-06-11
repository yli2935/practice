import PropTypes from 'prop-types';
import { useMemo } from 'react';
// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Drawer, useMediaQuery } from '@mui/material';



const MainDrawer = ({ open, handleDrawerToggle, window }) => {
    const theme = useTheme();
    const matchDownMD = useMediaQuery(theme.breakpoints.down('lg'));
    // responsive drawer container
    const container = window !== undefined ? () => window().document.body : undefined;
    
}