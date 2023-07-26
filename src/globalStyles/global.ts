import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import { colors } from './colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }

  .custom-loader {
    position:relative;
    width:5rem;
    height:5rem;
    border-radius:50%;
    background:#02A6FF;
    -webkit-mask:
      repeating-conic-gradient(#0000 0deg,#000 1deg 70deg,#0000 71deg 90deg),
      radial-gradient(farthest-side,#0000 calc(100% - 9px),#000 calc(100% - 8px));
    -webkit-mask-composite: destination-in;
    mask-composite: intersect;
    animation:s5 1s infinite ;
}
@keyframes s5 {to{transform: rotate(.5turn)}}

  a,
  a:visited
  {
    color:${colors.black.medium};
    text-decoration:none;
  }

  /* Works on Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: ${colors.blue.normal} ${colors.gray.medium};
}

/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 5px;
  height: 12px;
}

*::-webkit-scrollbar-track {
  background: ${colors.gray.medium};
}

*::-webkit-scrollbar-thumb {
  background-color: ${colors.blue.normal};
  border-radius: 5px;
  border: 1px solid transparent;
}
`;