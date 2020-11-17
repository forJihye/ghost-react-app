import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import { getPost } from "../api/ghost";

const StyledDetail = styled.section`
  width: 500px;
  margin: 50px auto 20px;
  text-align: left;
  .inner {
    padding: 30px;
    background: #f8f8f8;
    h1 {
      margin-top: 20px;
    }
  }
  .content {
    margin-top: 30px;
    font-size: 13px;
    line-height: 22px;
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
  
  const htmlParserImgs = html => {
    const split = html.split('>');
    const imgSrc = split.filter(str => str.includes('img')).map(img => img.split('src=')[1].split(' ')[0]);
    //이미지로딩 끝나면, html 그리기
  }

  return <main style={{textAlign: 'center', marginBottom: '50px'}}>
    {post && <StyledDetail>
      <div className="inner">
        <img src={post.feature_image} alt={post.title} />
        <h1>{post.title}</h1>
        <div className="content" dangerouslySetInnerHTML={{ __html: post.html }} />
        {/* {htmlParserImgs(post.html)} */}
      </div>
    </StyledDetail>}
    <button onClick={_=> histoty.goBack()}>목록으로</button>
  </main>
}
export default PostDetail;