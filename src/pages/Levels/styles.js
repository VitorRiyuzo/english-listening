import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
`;
export const Level = styled.View`
  flex-direction:row;
  padding:20px 30%;
  align-self:flex-start;
`;
export const Img = styled.Image`
  width:80%;
`;
export const Logo = styled.View`
  width:100%;
  align-items:center;
  background:black;
  opacity:0.7;
`;
export const Timer = styled.View`
  position:absolute;
  height:105%;
  padding-top:50%;
  width:100%;
  align-items:center;
  justify-content:space-around;
  background:black;
  text-align:center;
  z-index:1000;
  opacity:0.9;
`