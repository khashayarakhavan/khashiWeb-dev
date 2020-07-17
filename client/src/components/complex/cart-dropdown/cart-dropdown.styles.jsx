import styled from 'styled-components';
import CustomButton from '../../atomic/custom-button/custom-button.component';

export const CartDropdownContainer = styled.div`
         position: absolute;
         background-image: linear-gradient(to right, orangered, mediumseagreen);
         width: 240px;
         height: 340px;
         display: flex;
         flex-direction: column;
         padding: 20px;
         border: 1px solid black;
         background-color: white;
         top: 90px;
         right: 400px;
         z-index: 5;
       `;

export const CartDropdownButton = styled(CustomButton)`
  margin-top: auto;
`;

CartDropdownButton.displayName = 'CartDropdownButton';

export const EmptyMessageContainer = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

EmptyMessageContainer.displayName = 'EmptyMessageContainer';

export const CartItemsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;
