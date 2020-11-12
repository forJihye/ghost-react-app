import { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import { getPost } from "../api/ghost";

const StyledDetail = styled.section`
  width: 500px;
  margin: 50px auto 20px;
  .inner {
    padding: 30px;
    background: #f8f8f8;
  }
`;

const PostDetail = () => {
  const params = useParams();
  const histoty = useHistory();
  const [post, setPost] = useState(null);
  useEffect(() => { 
    (async() => {
      const data = await getPost(params.id);
      setPost(data);
    })();
  }, [params]); 

  return <main style={{textAlign: 'center', marginBottom: '50px'}}>
    <StyledDetail>
      {post && <div className="inner">
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>}
    </StyledDetail>
    <button onClick={_=> histoty.goBack()}>목록으로</button>
  </main>
}
export default PostDetail;