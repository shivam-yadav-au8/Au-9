import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
const Extended = () => {
    const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
    const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;
const Abc = styled.section`
  padding: 4em;
  background: red;

`;
    return (<div>
        <Wrapper>
    <Title>
      Hello World!
    </Title>
  </Wrapper>
  <Abc>
<h1 style={{color:'white'}}>djddm</h1>
  </Abc>
  </div> 
     );
}
 
export default Extended;