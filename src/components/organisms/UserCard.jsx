import React, { memo } from 'react'
import styled from "styled-components"
import { Card } from '../atoms/card/Card'
import { UserIconWithName } from '../molecules/user/UserIconWithName'


export const UserCard = memo((props) => {
  const {user} = props
  return (
    <Card>
<UserIconWithName name={user.name} image={user.image}/>
      <SDl>
        <dt>email</dt><dd>{user.email}</dd>
        <dt>phone</dt><dd>{user.phone}</dd>
        <dt>address</dt><dd>{user.address}</dd>
      </SDl>
    </Card>
  )
})

const SDl = styled.dl`
margin:0;
text-align:left;
dt{
  float:left;
}
dd{
  padding-left:35px;
  padding-bottom:10px;
  overflow-wrap:break-word;
}`
