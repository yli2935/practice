/*
 * @Author: Li yli2935@uwo.ca
 * @Date: 2023-06-18 14:40:20
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2023-06-23 14:47:58
 * @FilePath: /practie/practice/src/modules/components/Highlighter.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import { Box, CardActions, Collapse, Divider, IconButton, Tooltip } from '@mui/material';

// third-party
import { CopyToClipboard } from 'react-copy-to-clipboard';
import reactElementToJSXString from 'react-element-to-jsx-string';

// project import
import SyntaxHighlight from './SyntaxHighlight';

// assets
import { CodeOutlined, CopyOutlined } from '@ant-design/icons';

// ==============================|| CLIPBOARD & HIGHLIGHTER   ||============================== //

const Highlighter = ({ children }) => {
  const [highlight, setHighlight] = useState(false);

  return (
    <Box sx={{ position: 'relative' }}>
      <CardActions sx={{ justifyContent: 'flex-end', p: 1, mb: highlight ? 1 : 0 }}>
        <Box sx={{ display: 'flex', position: 'inherit', right: 0, top: 6 }}>
          <CopyToClipboard text={reactElementToJSXString(children, { showFunctions: true, maxInlineAttributesLineLength: 100 })}>
            <Tooltip title="Copy the source" placement="top-end">
              <IconButton color="secondary" size="small" sx={{ fontSize: '0.875rem' }}>
                <CopyOutlined />
              </IconButton>
            </Tooltip>
          </CopyToClipboard>
          <Divider orientation="vertical" variant="middle" flexItem sx={{ mx: 1 }} />
          <Tooltip title="Show the source" placement="top-end">
            <IconButton
              sx={{ fontSize: '0.875rem' }}
              size="small"
              color={highlight ? 'primary' : 'secondary'}
              onClick={() => setHighlight(!highlight)}
            >
              <CodeOutlined />
            </IconButton>
          </Tooltip>
        </Box>
      </CardActions>
      <Collapse in={highlight}>
        {highlight && (
          <SyntaxHighlight>
            {reactElementToJSXString(children, {
              showFunctions: true,
              showDefaultProps: false,
              maxInlineAttributesLineLength: 100
            })}
          </SyntaxHighlight>
        )}
      </Collapse>
    </Box>
  );
};

Highlighter.propTypes = {
  children: PropTypes.node
};

export default Highlighter;
