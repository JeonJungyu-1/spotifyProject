import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LeftMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  margin: 10px;
  /* width: 300px; */
`;

const ListContainer = styled.div`
  align-items: flex-start;
  margin: 5px;
`;

const List = styled.div`
  margin: 10px;
  color: #e0dddd;
  cursor: pointer;
  &:hover {
    color: #ffffff;
  }
`;

export default function LeftMenu() {
  return (
    <LeftMenuContainer>
      <div>Spotify</div>
      <ListContainer>
        <List>홈</List>
        <Link to="search">검색하기</Link>
        <List>내 라이브러리</List>
        <List>플레이리스트 만들기</List>
        <List>좋아요 표시한 곡</List>
      </ListContainer>
    </LeftMenuContainer>
  );
}
