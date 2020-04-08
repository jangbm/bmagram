import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  font-size: 14px;
  display: flex;
  justify-content: space-between;
`;

const List = styled.ul`
  display: flex;
`;

const ListItem = styled.li`
  &:not(:last-child) {
    margin-right: 16px;
  }
`;

const Link = styled.a`
  color: rgba(0, 0, 0, 0.8);
`;

const Copyright = styled.span`
  color: rgba(0, 0, 0, 0.8);
`;

export default () => (
  <Footer>
    <List>
      <ListItem>
        <Link href="#">소개</Link>
      </ListItem>
      <ListItem>
        <Link href="#">도움말</Link>
      </ListItem>
      <ListItem>
        <Link href="#">홍보</Link>
      </ListItem>
      <ListItem>
        <Link href="#">센터API</Link>
      </ListItem>
      <ListItem>
        <Link href="#">채용</Link>
      </ListItem>
      <ListItem>
        <Link href="#">정보개인정보처리방침</Link>
      </ListItem>
      <ListItem>
        <Link href="#">약관</Link>
      </ListItem>
      <ListItem>
        <Link href="#">위치</Link>
      </ListItem>
      <ListItem>
        <Link href="#">인기</Link>
      </ListItem>
      <ListItem>
        <Link href="#">계정</Link>
      </ListItem>
      <ListItem>
        <Link href="#">해시태그</Link>
      </ListItem>
      <ListItem>
        <Link href="#">언어</Link>
      </ListItem>{" "}
    </List>
    <Copyright>Bmagram {new Date().getFullYear()} &copy;</Copyright>
  </Footer>
);
