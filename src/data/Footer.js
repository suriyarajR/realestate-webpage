import styled  from "styled-components";

export const Container = styled.nav`
  padding: 100px 150px;

  background-color: #000d1a;
`;

export const Wrapper = styled.div`
 display:flex;
 flex-direction:column;
 justify-content:center;
 max-width:1000px
`;

export const Column = styled.div`
    display:flex;
    flex-direction:column;
    text-align:left;
    margin-left:60px;
`;

export const Row =styled.div`
    display:grid;
    grid-template-columns: repeat(auto-fill,minmax(230px,1fr));
    grid-gap:20px;
 
`;
export const Link = styled.div`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #ffb71c;
    transition: 200ms ease-in;
  }
`;

export const Title = styled.div`
  font-size: 24px;
  color: #fff;
  margin-bottom: 25px;
  font-weight: bold;
`;

