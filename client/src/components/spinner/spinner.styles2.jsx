import styled from 'styled-components';

export const SpinnerOverlay = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpinnerContainer = styled.div`
  display: inline-block;
  width: 50px;
  border-color: green;
  height: 50px;
  ${'' /* border: 3px solid rgba(195, 195, 195, 0.6); */}
  border: 2px solid rgba(10, 20, 30, 0.6);
  border-radius: 5px;
  border-top-color: blue;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 0.9s ease-in-out infinite;

  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;
