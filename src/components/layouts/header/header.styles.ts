import styled from "styled-components";

export const Wrapper = styled.header`
  background-color: #202125;
	height: 75px;
  display: flex;
	align-items: center;
	justify-content: space-between;
`

export const CoinWrapper = styled.div`
  height: 75px;
  width: 75px;
  background-color: #8798f9;
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    width: 50%;
    height: 50%;
  }
`

export const RightSection = styled.div`
	display: flex;
`

export const RightItem = styled.div`
  height: 75px;
  width: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
	cursor: pointer;
	transition: opacity 0.25s ease-in-out;
	border-left: 2px solid white;
	
	&:hover{
		opacity: 0.7;
	}
	
  & img {
    width: 50%;
    height: 50%;
  }
`
