import styled from 'styled-components';
import { Link } from 'react-router-dom';

// import { background } from "../../themes/variants/buttonColor";
import { Headerbackground } from "../../themes/mode/index";

export const HeaderContainer = styled.div`
         height: 70px;
         width: 100%;
         display: flex;
         justify-content: space-between;
         margin-bottom: 25px;
         ${"" /* background-color: ${Headerbackground}; */}
         color: 'pink';

         background-color: ${(props) => props.theme.background };

         /* Color the border and text with theme.main */
         ${'' /* color: ${(props) => props.theme.main}; */}
         border: 5px solid ${(props) => props.theme.foreground};

         @media screen and (max-width: 800px) {
           height: 60px;
           padding: 10px;
           margin-bottom: 20px;
         }
       `;

// HeaderContainer.defaultProps = {
//   borderColor: "blue",
// };

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;

  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0;
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  
`;

OptionLink.displayName = 'OptionLink';
