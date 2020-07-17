import styled from 'styled-components';

export const LandingPageContainer = styled.div`
         
         display: grid;
         grid-template-rows: 80vh min-content min-content minmax(40rem, min-content) repeat(
             4,
             min-content
           );
         ${'' /* grid-template-rows: 80vh 100rem; */}
         grid-template-columns: [sidebar-start] 8rem [sidebar-end full-start] minmax(
             6rem,
             1fr
           ) [center-start] repeat(
             8,
             [col-start] minmax(min-content, 12rem) [col-end]
           ) [center-end] minmax(6rem, 1fr) [full-end];
         
       `;
