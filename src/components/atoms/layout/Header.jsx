import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Header = () => {
  return (
    <SHeader>
      <SLink to='/'>Home</SLink>
      <SLink to="/users">Users</SLink>
    </SHeader>
  )
}

const SHeader = styled.header`
background-color: #11999e;
color: #fff;
text-align: center;
padding: 10px 0;
`

const SLink = styled(Link)`
margin: 0 10px;
color: #fff;
text-decoration: none;
`