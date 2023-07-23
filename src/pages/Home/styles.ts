import styled from 'styled-components';
import { colors } from '../../globalStyles/colors';

export const Container = styled.div`
display:flex;
flex-direction:column;
width:100%;
min-height:100vh;
background:${colors.gray.normal};
color:${colors.black.medium};
gap:7.1875rem;
padding:1rem 0.5rem;
padding-bottom:5rem;

header
{
  width: 100%;
  img
  {

    width: 14.1875rem;
    height: 5.625rem;
  }
}

@media(max-width:730px)
{
  &
  {
    padding: 0.5rem;
  }
}
`;

export const Main = styled.main`
display: flex;
width: 100%;
flex-wrap:wrap;
gap:2rem;

& >div:last-child
{
 display:flex;
 flex:1;
 flex-direction:column;
 gap:2.625rem;
 height: auto;
 justify-content:center;
 align-items:center;
 h1
 {
   font-size:2rem;
   font-weight:bold;
   width: 43.75rem;
   word-break:break-word;
 }
 h2
 {
  font-size:1.5rem;
  font-weight:regular;
  width: 43.75rem;
  
  word-break: break-word;

 }
 
 & > div
 {
  display: flex;
  width: 100%;
  justify-content:center;
  align-items:center;
  flex-wrap:wrap;
  gap:1rem;

 }
}

& > div:first-child
{
  flex:1;
  display:flex;
  justify-content:center;
  align-items:center;
  height: auto;
  
  img
  {
    width: 40rem;
    height: 30rem;
  }
}

@media(max-width:920px)
{
  &
  {
    flex-direction:column;
   
  }
  & >div:last-child
  {
    h1
    {
      font-size:1.5rem;
      width: 80%;
    }
    h2
    {
      font-size:1rem;
      width: 80%;

    }
    & > div
    {
    flex-direction:column;
    button
    {
      width: 80%;
    }

    }
    
  }
  & > div:first-child
  {
      display:none;
  }
}

`;