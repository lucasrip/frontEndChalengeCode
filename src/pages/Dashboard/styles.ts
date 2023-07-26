import styled from 'styled-components';
import { colors } from '../../globalStyles/colors';

export const Container = styled.div`
position:relative;
display:flex;
width:100%;
height:100%;
min-height:100rem;
background:${colors.gray.light};
color:${colors.black.medium};
gap:6rem;

main
{
  display:flex;
  width: 100%;
  height: auto;
  background:${colors.gray.light};
  color:${colors.black.medium};
  justify-content:center;
  align-items:center;
  padding-bottom:3rem;
}

@media(max-width:1000px)
{
  &{
    flex-direction:column;
  }

}

  @media(max-width:500px)
  {
    & main
    {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      align-items:flex-start;
      justify-content:flex-start;

    }
  }
`;
