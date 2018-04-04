import React from "react";
import styled from "styled-components";

import { media } from "../../styles";

const CardFooter = ({ className, content }) => (
  <div className={className}>{content}</div>
);

const StyledCardFooter = styled(CardFooter)`
  border-top: 1px solid #d4d4d5;
  line-height: 30px;
  padding: 5px;
`;

const CardContent = ({ className, content }) => (
  <div className={className}>{content}</div>
);

const StyledCardContent = styled(CardContent)`
  padding: 5px;
  flex: 1;
`;

const Card = ({ className, content, footer }) => (
  <div className={className}>
    {content && <StyledCardContent content={content} />}
    {footer && <StyledCardFooter content={footer} />}
  </div>
);

export default styled(Card)`
  /*width: 27%;
  margin: 3%;*/

  width: 20%;
  ${media.desktop`width: 25%;`}
  ${media.tablet`width: 50%;`}
  ${media.phone`width: 100%;`}


  background: #fff;
  height: 250px;
  display: inline-flex;
  flex-flow: column;
  border-radius: 3px;
  box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
`;

// todo: media queries
