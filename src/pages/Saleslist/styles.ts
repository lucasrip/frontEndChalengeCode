import styled from 'styled-components';
import { colors } from '../../globalStyles/colors';

export const Container = styled.div`
display:flex;
width:90%;
min-height: 60rem;
border-radius:4px;
color:${colors.black.medium};
background: ${colors.gray.normal};
flex-direction:column;
justify-conten:center;
align-items:center;
padding-bottom:2rem;
gap:2rem;

header
{
    width: 100%;
    height: 5rem;
    display:flex;
    font-size:1.5rem;
    font-weight:normal;
    align-items:center; 

    h1
    {
      font-size:1.5rem;
    }
    img
    {
      width: 2rem;
      height: 2rem;
      background:transparent;      
      margin-right:1rem;
      margin-left:0.5rem;
    }

    div
    {
      width: 2rem;
      height: 0.5rem;
      background:${colors.black.medium};
    }

}


@media(max-width:500px)
{
  &{
    width: 100%;
  }
}
`;


export const TableBody = styled.div`
  display:flex;
  width:80%;
  height: auto;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  gap:2rem;
  overflow: auto;

  @media(max-width:600px)
  {
    &{
      width: 80%;

    }
  }

`;

export const SalesValuesContainer = styled.div`
  display:flex;
  flex-wrap:wrap;
  width:100%;
  height: auto;
  flex-wrp:wrap;
  justify-content:space-evenly;
  align-items:center;
  gap:2rem;
  padding:1rem;

`;
