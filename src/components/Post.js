import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

const shine = keyframes`
  to {
    background-position: right -40px top 0;
  }
`

const ImageInner = styled.div`
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
const StyledCard = styled.div`
  padding: 20px;
  box-shadow: 0 0 5px rgba(0,0,0,.15);
  h3 {
    margin-top: 15px;
    margin-bottom: 15px;
    line-height: 22px;
  }
  span {
    font-size: 13px;
    padding-right: 10px;
  }
`;

const loaderElement = (el) => new Promise(res => {
  if(el.tagName === 'IMG'){
    el.onload = () => {
      el.parentNode.classList.remove('loading');
      res();
    }
  }
});

const Post = React.forwardRef(({post, i}, ref) => {
  const img = useRef(null);
  const imgInner = useRef(null);

  useEffect(() => {
    if(img){
      // loaderElement(img.current);
      // const io = new IntersectionObserver((entries, observer) => {
      //   entries.forEach(entry => {
      //     const {target} = entry;
      //     if(entry.isIntersecting){
      //       observer.unobserve(target);
      //       console.log(target.src);
      //     }
      //   })
      // });
      // io.observe(img.current);
    }
  }, []);

  const createImageElement = src => {
    console.log(src)
  }
  return <StyledCard>
    <ImageInner ref={imgInner} className="loading">
      {createImageElement(`http://picsum.photos/350/350?${i}`)}
      {/* <img ref={img} src={`http://picsum.photos/350/350?${i}`} alt={post.title} /> */}
    </ImageInner>
    <h3 className="title">{post.title}</h3>
    <div className="tags">
      {post.tags.map((tag, i) => <span key={`tag${i}`}>{tag.name}</span>)}
    </div>
  </StyledCard>
})

export default Post;