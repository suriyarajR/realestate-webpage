import React from 'react';
import {Container,Wrapper,Row,Column,Link,Title} from './Footer'

export default function Footer({children}){
    return <Container >{children}</Container>
}

Footer.Wrapper = function FooterWrapper({ children }) {
    return <Wrapper >{children}</Wrapper>
};

Footer.Row = function FooterRow({ children}) {
  return <Row >{children}</Row>;
};

Footer.Column = function FooterColumn({ children }) {
  return <Column >{children}</Column>;
};

Footer.Link = function FooterLink({ children }) {
  return <Link>{children}</Link>;
};

Footer.Title = function FooterTitle({ children}) {
    return <Title >{children}</Title>
};