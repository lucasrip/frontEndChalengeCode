import styled from 'styled-components';
import { colors } from '../../globalStyles/colors';

export const Container = styled.div`
display:flex;
width:80%;
min-height: 50rem;
border-radius:4px;
color:${colors.black.medium};
background: ${colors.gray.normal};
flex-direction:column;
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

export const FormFile = styled.form`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:100%;
  height: auto;
  border-radius:4px;
  color:${colors.black.medium};
  background: ${colors.gray.normal};
  gap:3rem;
  padding-bottom:3rem;
  margin-top:3rem;
  p
  {
    padding: 1rem;
    text-align:center;
    text-justify:center;
  }

  label
  {
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    width: 60%;
    height: 25rem;
    border:2px dashed ${colors.gray.mediumHard};
    background: ${colors.gray.light};
    border-radius:4px;
    cursor:pointer;

    img
    {
      width:8rem ;
      height: 8rem;
    }
    
  }
  button
  {
   width: 60%;

  }

  strong
  {
    padding:1rem ;
  }
  
  @media(max-width:500px)
  {
    
    label
    {
      width: 60%;
      height: 15rem;
      img
      {
        width: 4rem;
        height: 4remrem;
      }
      p
      {
        font-size:1rem;
      }
    }
  }
`;


export const FileModelContainer = styled.div`

    display: flex;
    flex-direction:column;
    width: 100%;
    justify-content:center;
    padding: 0.5rem;
    gap:2rem;
    a{
      font-size:1.2rem;
      text-decoration: underline;
    }

    & > div
    {
      margin-left:1rem;
      margin-top:2rem;

   
    }



`;