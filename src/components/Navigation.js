import React from 'react'
import styled from 'styled-components'
import {Link } from 'react-router-dom'

const Header = styled.header`
  background-color: #fa163f;
  padding:30px 0;
`

const NavContainer = styled.div`
  width: 90%;
  max-width:1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;

  h1 {
    font-size: 21px;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.25rem;
    color: #fff;
  }
`

const Nav = styled.nav`

  ul{
    display: flex;
    list-style: none;

  }

  li + li {
    margin-left: 20px;
  }

  a {
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 300;
    cursor: pointer;
    color: #fff;

    &:hover {
      color: #16FAD1;
      font-weight: 400;
    }
  }
`

const Navigation = () => {
  return (
    <Header>
      <NavContainer>
        <h1>Movie-App</h1>
        <Nav>
          <ul>
            <li><Link to="/">Home</Link></li>
          </ul>
        </Nav>
      </NavContainer>
    </Header>
  )
}

export default Navigation
