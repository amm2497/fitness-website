import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import {FaBars, FaRegArrowAltCircleDown} from "react-icons/fa"
import {menuData} from "../data/menuData"
import { Button } from "./Button"

const Header = ({ siteTitle }) => {
  return(
    <Nav>
      <NavLink to="/" css={`margin-top: 15px;`}>Dawg Pound Fitness</NavLink>
      <Bars/>
      <NavMenu>
        {menuData.map((item, index)=> {
          return(
            <NavLink to={item.link} index={index}>
            <span css={`margin-right: -20px;`}>
              {item.icon}
              </span>
              <span>
              {item.title}
            </span>
            </NavLink>
          )})}
      </NavMenu>
      <Button css={`
        display: flex;
        align-items: center;
        margin-right: 24px;
      
        @media screen and (max-width: 768px){
          display: none;
        }`} primary="true" round="true" to="/classes">
        Book a Class
      </Button>
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px)/2);
  z-index: 100;
  position: relative;
`
// /*   padding 0 1rem; */
const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  text-decoration: none;
  height: 100%;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;

  span {
    padding: 15px 15px;
  }
`
// Only shows bars in mobile view
const Bars = styled(FaBars)`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

const NavMenu = styled.div`
  display: flex;
  align: items-center;
  margin-right: -48px;

  @media screen and (max-width: 768px){
    display: none;
  }
`

const NavBtn = styled(Button)`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px){
    display: none;
  }
`
