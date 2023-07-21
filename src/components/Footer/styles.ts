import styled from 'styled-components';
import { colors } from '../../globalStyles/colors';

export const Container = styled.div`
   display:flex;
   align-items:center;
   background:${colors.blue.normal};
   width:100%;
   height:4.0625rem;

   span
   {
     margin-left:2rem;
     color:${colors.white.normal};
    a{
     margin-left:0.5rem;
     color:${colors.white.normal};
    
    }
   }
`;
