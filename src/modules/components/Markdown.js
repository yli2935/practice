/*
 * @Author: Li yli2935@uwo.ca
 * @Date: 2023-06-09 11:43:52
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2023-06-25 15:43:47
 * @FilePath: /practie/practice/src/modules/components/Markdown.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import * as React from 'react';
import ReactMarkdown from 'markdown-to-jsx';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';



import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {coy as CodeStyle} from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlock = ({className, children}) => {

  return (
    <SyntaxHighlighter language="java" style={CodeStyle}>
      {children}
    </SyntaxHighlighter>
  );
}

// markdown-to-jsx uses <pre><code/></pre> for code blocks.
const PreBlock = ({children, ...rest}) => {
  if ('type' in children && children ['type'] === 'code') {
    return CodeBlock(children['props']);
  }
  return <pre {...rest}>{children}</pre>;
};

const CustomBlockquote = ({ children ,...rest }) => (
  <div style={{ borderLeft: '4px solid #ccc', paddingLeft: '16px' }}>
    <blockquote {...rest}>{children}</blockquote>
  </div>
);


const options = {
  overrides: {
    pre: PreBlock,
    blockquote:CustomBlockquote,
    h1: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: 'h4',
      },
    },
    h2: {
      component: Typography,
      props: { gutterBottom: true, variant: 'h6' },
    },
    h3: {
      component: Typography,
      props: { gutterBottom: true, variant: 'subtitle1' },
    },
    h4: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: 'caption',
        paragraph: true,
      },
    },
    p: {
      component: Typography,
      props: { paragraph: true },
    },
    a: { component: Link },
    li: {
      component: (props) => (
        <Box component="li" sx={{ mt: 1 }}>
          <Typography component="span" {...props} />
        </Box>
      ),
    },
  },
};



export default function Markdown(props) {

  return <ReactMarkdown options={options} {...props} />;
}