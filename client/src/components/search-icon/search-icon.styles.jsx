import styled from 'styled-components';

import {ReactComponent as StarSvg} from "../../assets/SVG/star.svg";

export const SearchContainer = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  
`;

export const SVG = styled.svg`
  width: 24px;
  height: 24px;
  fill: lightblue;
 
  cursor: pointer;
`;

SearchContainer.displayName = 'SearchContainer';

export const StarIcon = styled(StarSvg)`
  width: 24px;
  height: 24px;
  fill: pink;

`;

export const ItemCountContainer = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;

ItemCountContainer.displayName = 'ItemCountContainer';
