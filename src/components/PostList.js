import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getPostsByPage } from '../api/ghost';
import styled from 'styled-components';
import Post from './Post';
import Pagination from './Pagination';
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
  const [pagination, setPagination] = useState([]);
  const [posts] = useAsync(async() => {
    const data = await getPostsByPage({limit: 5, page: location.search ? Number(location.search.split('=')[1]) : 1});
    setPagination(data.meta?.pagination);
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
  
  return <section style={{width: '1200px', margin: '0 auto'}}>
    <GridContainer>
      {posts && posts.length > 0 ? posts.map((post, i) => <Post key={`post${i}`} post={post} i={i} />) : 'Loading...'}
    </GridContainer> 
    {posts && <Pagination pages={pagination.pages} prev={pagination.prev} next={pagination.next} />}
  </section>
}

export default PostList;

