import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LoadStyle from './LoadStyle';

const StyledPost = styled.div`
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

const Post = React.forwardRef(({post, i}, ref) => {
  const img = useRef(null);
  //console.log(post)
  useEffect(() => {
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
  }, []);

  return <StyledPost>
    <Link to={`/detail/${post.id}`}>
      <LoadStyle>
        <img ref={img} src={post.feature_image} alt={post.title} />
        {/* <img ref={img} src={`http://picsum.photos/350/350?${i}`} alt={post.title} /> */}
      </LoadStyle>
      <h3 className="title">{post.title}</h3>
      <div className="tags">
        {post.tags.map((tag, i) => <span key={`tag${i}`}>{tag.name}</span>)}
      </div>
    </Link>
  </StyledPost>
})

export default Post;
