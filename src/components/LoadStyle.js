import { useEffect } from 'react';
import styled, {keyframes} from 'styled-components';

const shine = keyframes`
  to {
    background-position: right -40px top 0;
  }
`
const LoadingContainer = styled.div`
  position: relative;
  &.loading::after {  
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 5;
    background-color: #e2e5e7;
    background-image: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0));
    background-size: 40px 100%;
    background-repeat: no-repeat;
    background-position: left -40px top 0;
    animation: ${shine} 1s ease infinite;
  }
`;

const loadingImage = (el) => {
  el.parentNode.classList.add('loading');
  switch(el.tagName){
  case 'IMG': return new Promise(res => {
    if(!el.complete){
      el.onload = () => {
        el.parentNode.classList.remove('loading');
        res();
      }
    }else{
      el.parentNode.classList.remove('loading');
    }
  }) 
  case 'VIDEO': console.log('video');
  }
}; 

const LoadStyle = ({children}) => {  
  const {ref} = children;
  useEffect(() => {
    (async() => {
      if(children) await loadingImage(ref.current);
    })();
  }, []);

  return <LoadingContainer> {children} </LoadingContainer>
}

export default LoadStyle;