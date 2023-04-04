import NextLink from "next/link";
import styled from 'styled-components'

export const Wrapper = styled.aside`
  display: flex;
  flex-direction: column;
  width: 75px;
  background-color: #202125;
  height: 100%;
  padding-top: 20px;
  gap: 15px;
  align-items: center;
`

export const Link = styled(NextLink)`
  font-size: 20px;
  text-align: center;
`
