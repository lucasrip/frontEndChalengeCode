import styled from 'styled-components';
import { colors } from './../../globalStyles/colors';

interface Props
{
  typeStyle: 'default' | 'base' | 'positive' | 'nagative';
}

const buttonStyles = {
  default:{
    background: 'transparent',
    color: `${colors.black.medium}`,
    padding: '0.5rem',
    border:'0px',
    borderRadius:'0px',
    borderBottom:`5px solid ${colors.black.medium}`,
  },
  base:{
    background: `${colors.blue.light}`,
    color: `${colors.gray.normal}`,
  },
  positive:{
    background: `${colors.blue.normal}`,
    color: `${colors.gray.normal}`,
  },
  nagative:{
    color: `${colors.white}`,
  }

};

export const Container = styled.button`
 display:flex;
 justify-content: center;
 width: 17.5625rem;
 max-width:auto;
 min-height: 2rem;
 height: 4.5rem;
 align-items: center;
 font-weight:700;
 font-size: 1.5rem;
 border: 0px ;
 border-radius: 8px;
 text-transform:capitalize;
 ${ ({typeStyle}:Props)=> buttonStyles[typeStyle]}
 
 &:disabled
 {
   cursor: not-allowed;
 }

 &:hover
 {
  opacity:0.8;
 }
 
`;