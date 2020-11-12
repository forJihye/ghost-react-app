import { useEffect, useState, useRef } from 'react';
import { getPosts } from '../api/ghost';
import styled from 'styled-components';
import Post from './Post';
import { sleep } from '../utils';

const GridContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-template-rows: minmax(100px, auto);
  grid-auto-flow: dense;
  grid-gap: 20px;
`;
const LoadingContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: #fff;
  z-index: 5;
`;

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const container = useRef(null);

  useEffect(() => { 
    (async() => {
      setPosts(await getPosts({limit: 10}));
    })();
  }, []);

  const onIntersection = (entries, observer) => {
    entries.forEach(async(entry) => {
      if(entry.isIntersecting){
        console.log('show')
        // observer.unobserve(entry.target);
        // ...
        // observer.observe();
      }else{
        console.log('hide')
      }
    });
  }

  useEffect(() => {
    const io = new IntersectionObserver(onIntersection, {threshold: 1.0});
  }, []);
  
  return <section>
    <GridContainer ref={container}>
      {posts.length > 0 ? posts.map((post, i) => <Post key={`post${i}`} post={post} i={i} />) : 'Loading...'}
      {isLoading && <LoadingContainer>Loading...</LoadingContainer>}
    </GridContainer>
  </section>
}

export default PostList;
