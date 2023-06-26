/*
 * @Author: Li yli2935@uwo.ca
 * @Date: 2023-06-09 11:28:10
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2023-06-26 14:02:16
 * @FilePath: /practie/practice/src/modules/pages/Term.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Markdown from '../components/Markdown';
import Typography from '../components/Typography';
import withRoot from '../withRoot';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';
function Codes(props) {
  const { path,title,difficulty} = props;
  const [post, setPost] = React.useState('');

  React.useEffect(() => {
    
    import('' + path)
      .then(res => {
        fetch(res.default)
          .then(res => res.text())
          .then(res => setPost(res))
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  });
  return (
    <React.Fragment>
      <Container>
        <Box sx={{ mt: 7, mb: 12 }}>
          <Typography variant="h5" gutterBottom marked="center" align="center" >
            {title}
          </Typography>
          <br></br>
          <Box sx={{ display: 'flex',flexDirection: 'row' }}>     
            <Typography variant="h5" sx={{ mr:1 }}>
              Difficulty : 
            </Typography>
            <Rating name="read-only" value={difficulty} readOnly />
          </Box>
          
          
          <Divider sx={{ mt:1, mb: 3 }}/>
          
            <Markdown>
              {/* <SyntaxHighlight> */}
                {post}
              {/* </SyntaxHighlight> */}
            </Markdown>
          
          


        </Box>
        
        <Box align="center" marginBottom={10}>

      </Box>
        
      </Container>

    </React.Fragment>
  );
}

export default withRoot(Codes);