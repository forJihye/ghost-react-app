import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getAllPosts } from '../api/ghost';
import { slideOutLeft } from '../utils/keyframes';

const frameColors = ['lawngreen', 'lightcoral', 'orange', 'slateblue', 'royalblue', 'olive'];
const Container = styled.section`
  width: 1000px;
  margin: 0 auto;
  padding: 50px 0;
`;
const BlogList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, minmax(300px, auto));
  grid-gap: 15px;
  > div {
    position: relative;
  }
`;
const Visual = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 1.5em;
  box-sizing: border-box;
  display: flex;
  align-items: flex-end;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: 1;
  .title {
    display: none;
    line-height: 1.2;
  }
`;
const Frame = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  animation: ${slideOutLeft} 1s ease both;
`;

const Blog = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    (async() => {
      const data = await getAllPosts();
      setList(data);
    })();
  }, []);

  const blogList = (list) => list.map((item, i) => <div key={`blog${i}`}>
    <div className="inner">
      <Frame style={{backgroundColor: '#000'}}></Frame>
      <Visual style={{backgroundImage: `url(${item.feature_image})`}}>
        <p className="title">{item.title}</p>
      </Visual>
    </div>
  </div>);
  
  return <Container>{list.length > 0 ? <BlogList>{blogList(list)}</BlogList> : <div>Loading...</div>}</Container>
}

export default Blog;
