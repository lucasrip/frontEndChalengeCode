import styled from 'styled-components';
import { colors } from '../../globalStyles/colors';

export const Container = styled.div`
width: 24rem;
min-height:100%;
min-width:15rem;
background: ${colors.gray.normal};
color:${colors.black.medium};

& > header
{
  &  > :first-child
  {
    width: 100%;
    height: 5.625rem;
    display:flex;
    justify-content:space-between;
    padding:0.5rem;
    align-items:center;
    background: ${colors.gray.mediumHard};

    img
    {
      width: 2.4375rem;
      height: 2.3125rem;
      background:transparent;    
      cursor:pointer;

    }
  }

  & > :last-child
  {
    width: 100%;
    height: 4rem;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    padding: 1rem;
    background: ${colors.gray.medium};
    
    p
    {
      font-style: normal;
      font-weight: 500;
      font-size: 1.2rem;
      max-width: 10rem;
      min-width: auto;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      text-transform:capitalize;
    }
  }
}

& > div
{
  display: flex;
  flex-direction:column;
  height: 60rem;

  padding:1rem 0.5rem;
  gap:2rem;
  scrollbar-color:${colors.blue.normal};
  a 
  {
    width: 100%;
    min-width:15rem;
    height: auto;
    display:flex;
    padding:0.5rem;
    font-size:1.5rem;
    font-weight:normal;
    img
    {
      width: 2rem;
      height: 2rem;
      background:transparent;      
      margin-right:1rem;
     cursor:pointer;

    }
  }
 
  a,
  a:visited
  {
    color:${colors.black.medium};
    cursor:pointer;
  
  }
}

@media(max-width:1000px)
{
  &{
    width:100%;
 
    div
    {
      flex-direction:row;
      height: 5rem;
      min-height:0px;
      overflow:auto;

    }
  }
}


`;
