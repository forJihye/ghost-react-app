import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledPagination = styled.div`
  text-align: center;
  margin: 30px 0;
  a {
    display: inline-block;
    padding: 8px 12px;
    font-size: 13px;
    background-color: #eee;
    color: #666;
    border: 1px solid #d8d8d8;
    border-left: none;
    cursor: pointer;
    &:first-child {
      border-left: 1px solid #d8d8d8;
    }
    &:hover {
      background-color: #e8e8e8;
    }
    &.active {
      border-color: #3eb0ef;
      background-color: #3eb0ef;
      color: #fff;
    }
  }
`;

const Pagination = ({pages, prev, next}) => {
  return <StyledPagination>
    {pages.map((page, i) => <Link key={`page${i}`} to={`/?page=${page}`}>{page}</Link>)}
  </StyledPagination>
}

export default Pagination;