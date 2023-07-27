import styled from 'styled-components';
import { colors } from '../../globalStyles/colors';

export const Container = styled.div`
  height:12rem;
  min-width:10rem;
  flex:1;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  overlow:auto;
  background:${colors.gray.light};
  border-radius:5px;
  text-transform:capitalize;
  img
  {
    width:4rem;
    height:4rem;
  }

  strong
  {
    margin-top:0.5rem;
    margin-bottom: 1rem;
  }

`;
