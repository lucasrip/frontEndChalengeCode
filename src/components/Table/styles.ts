import styled from 'styled-components';
import { colors } from '../../globalStyles/colors';

export const Container = styled.div`
   
   display:flex;
   flex-direction:column;
   gap:1rem;
   overflow: auto;


   strong
   {
    font-size:1.2rem;
   }
   
   p
   {
    margin-left:0.5rem;
   }

   table
      {
        background: ${colors.gray.light};
        text-transform:capitalize;
        border-collapse: collapse;
        min-width:15rem;

        th,
        td
        {
          width: 12rem;
          min-width:5rem
          height: 2rem;
          padding:0.5rem;
          overflow:auto;
          text-justify:center;
          text-align:center;
          border: 2px solid ${colors.gray.medium};

        }
      }

      @media(max-width:500px)
     {
    
      table
      {
  
        th,
        td
        {
          width: auto;
          height: 1.5rem;
          border: 1px solid ${colors.gray.medium};

        }
      }

     }
`;
