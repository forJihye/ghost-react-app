import {keyframes} from 'styled-components';

export const slideOutLeft = keyframes`
  0%{
  width: 0%;
  }
  25% {
    width: 100%; 
  }
  50% {
    height: 100%;
  }
  100%{
  height: 0%;
  }
`;