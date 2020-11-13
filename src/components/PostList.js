import { useEffect, useState, useRef } from 'react';
import { getPosts, getPostsByPage } from '../api/ghost';
import styled from 'styled-components';
import Post from './Post';
import Pagination from './Pagination';
import { useLocation, useParams } from 'react-router-dom';
import useAsync from '../utils/useAsync';

const GridContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-template-rows: minmax(100px, auto);
  grid-auto-flow: dense;
  grid-gap: 20px;
`;

const PostList = () => {
  const location = useLocation();
  const container = useRef(null);
  const [pages, setPages] = useState([]);
  const [posts] = useAsync(async() => {
    const data = await getPostsByPage({limit: 5, page: location.search ? Number(location.search.split('=')[1]) : 1});
    const pagination = data.meta?.pagination;
    const total = Array.from({length: pagination.pages}, (v, i) => i+1);
    setPages(total);
    return data;
  }, [location]);
  
  useEffect(() => {
    const io = new IntersectionObserver(onIntersection, {threshold: 1.0});
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
  
  return <section>
    <GridContainer ref={container}>
      {posts && posts.length > 0 ? posts.map((post, i) => <Post key={`post${i}`} post={post} i={i} />) : 'Loading...'}
    </GridContainer> 
    {posts && <Pagination pages={pages} />}
  </section>
}

export default PostList;
