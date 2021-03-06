import React from 'react'
import styled,{css} from 'styled-components/macro'
import { Link } from 'react-router-dom';
import { menuData } from '../data/MenuData';
import { Button } from './Button';
import { GiHamburgerMenu } from "react-icons/gi";



const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
  background-color: rgba(46, 86, 125, 0.4);
`;

const NavLinks = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    color: #ffb71c;
    transition: 200ms ease-in;
  }
`;

const Logo = styled(Link)`
  color: #fff;
  font-style: italic;
  text-decoration: none;
  font-size: 20px;

  &:hover {
    transform: translate(5px);
  }
`;

const MenuBars = styled(GiHamburgerMenu)`
  @media screen and (max-width: 768px) {
    display: block;
  }
  display:none
`;
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px){
      display:none;
  }
`;

const NavMenuLinks = styled.div`
    ${NavLinks}
`;

const NavBtn = styled.div`
    display: flex;
    align-items:center;
    margin-right:24px;

      @media screen and (max-width: 768px){
      display:none;
      }
`;

const Navbar = ({toggle}) => {
    return (
        <Nav>
            <Logo to ='/'>REALESTATE</Logo>
            <MenuBars onClick={toggle}/>
            <NavMenu>
                {menuData.map((item,index) =>(
                    <NavMenuLinks to={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
            <NavBtn>
                <Button to='/contact' primary='true'>Contact Us</Button>
            </NavBtn>
        </Nav>
    )
}

export default Navbar
