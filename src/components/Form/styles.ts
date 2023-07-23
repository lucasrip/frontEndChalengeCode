import styled from 'styled-components';
import { colors } from '../../globalStyles/colors';

export const Container = styled.form`
 display:flex;
 flex-direction:column;
 width:45rem;
 max-width:90%;

 justify-content:center;
 align-items:center;
 height:30rem;
 gap:2rem;
 header
 {
  display:flex;
  width:100%;
  
  align-items:center;
  gap:1rem;
  img
  {
    width:1.5rem;
    height:1.5rem;
    cursor:pointer;
  }

  p
  {
    text-transform:capitalize;
    font-weight:bold;
  }

}

& > div
{
    display:flex;
    flex-direction:column;
    gap:2rem;
    width: 45rem;
    max-width:75%;
    
    & > div
    {
      display:flex;
      justify-content:center;
      align-items:center;
      gap:1rem;
      width:80%;

    & >input
    {
      width:100%;
      height: 3.5rem;
      padding:1rem;
    }
    & > input::placeholder
    {
      color:${colors.gray.medium};
      border:2px solid ${colors.gray.medium};
    }
    & > label
    {
      width: 5.5rem;
      font-size:1.5rem;
      color: ${colors.black.medium};
      text-transform:capitalize;
    }
    & > img
    {
      width:1.5rem;
      height: 1.5rem;;
    }
  }
  #senha
  {
    width: 90%;
  }
}

input:focus
{
  border: 2px solid ${colors.black.medium};
}
@media(max-width:700px)
{

  &
  {
    width: 100%;
    align-items:center;
    justify-content:center;
    
  }
  & > div
  {
    width: 80%;
    & > div 
    {
     width: 100%;
     flex-direction:column;
     align-items:flex-start;
     justify-content:flex-start;
    
    
    }
  }
}

`;


export const RocoverPasswordContainer = styled.div`
 display:flex;
 flex-direction:column;
 width:100%;
 height: auto;
 gap:1rem;
 header
 {
  width: 100%;
  display: flex;
  justify-content:flex-end;
  height: 2.5rem;
 }


 & > div
 {
   display: flex;
   justify-content:center;
   align-items:center;
   width: 90%;
   gap:0.5rem;
  input
    {
      width:90%;
      height: 3.5rem;
      padding:1rem;

    }
    input::placeholder
    {
      color:${colors.gray.medium};
      border:2px solid ${colors.gray.medium};
    }
    label
    {
      width: 12rem;
      font-size:1.5rem;
      color: ${colors.black.medium};
      text-transform:capitalize;
    }
 }

 & > div 
  {
    flex-direction:column;
    align-items:flex-start;
    justify-content:flex-start;
    
    input
    {
      width: 100%;
    }
  }
`;


export const ButtonsContainer= styled.div`
 display:flex;
 flex-direction:column;
 gap:1rem;
 button
 {
  width:100%;
 }
`;
