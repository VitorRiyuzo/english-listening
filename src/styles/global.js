import styled from 'styled-components/native';
export const Box = styled.View`
  margin-top:${props => props.mT ? `${props.mT}px` : 0};
  margin-left:${props => props.mL ? `${props.mL}px` : 0};
  margin-right:${props => props.mR ? `${props.mR}px` : 0};
  margin-bottom:${props => props.mB ? `${props.mB}px` : 0};
  padding-bottom:${props => props.pB ? `${props.pB}px` : 0};
  padding-top:${props => props.pT ? `${props.pT}px` : 0};
  padding-left:${props => props.pL ? `${props.pL}px` : 0};
  padding-right:${props => props.pR ? `${props.pR}px` : 0};
  height:${props => props.h ? `${props.h}px` : 'auto'};
  width:${props => props.w ? `${props.w}px` : 'auto'};
`;
export const Text = styled.Text`
  color:${props => props.color ? props.color : 'white'};
  font-size:${props => props.fS? `${props.fS}px` : '22px'};
  font-family:'eras-bold';
  text-align:${props => props.tA ? props.tA:'left'};
`;
export const Background = styled.ImageBackground`
    /* width: 100%; */
    height: 100%;
    flex: 1;
`;
const ButtonConfig = styled.TouchableOpacity`
  border-radius:7px;
  align-items:center;
  margin-top:${props => props.mT ? `${props.mT}px` : 0};
  margin-left:${props => props.mL ? `${props.mL}px` : 0};
  margin-right:${props => props.mR ? `${props.mR}px` : 0};
  margin-bottom:${props => props.mB ? `${props.mB}px` : 0};
  padding-bottom:${props => props.pB ? `${props.pB}px` : '10px'};
  padding-top:${props => props.pT ? `${props.pT}px` : '10px'};
  padding-left:${props => props.pL ? `${props.pL}px` : '10px'};
  padding-right:${props => props.pR ? `${props.pR}px` : '10px'};
  height:${props => props.h ? `${props.h}px` : 'auto'};
  width:${props => props.w ? `${props.w}px` : 'auto'};
`;
export const Button = {
  "Primary": styled(ButtonConfig)`
    background-color: ${props => props.bg ? props.bg : "#78b319"};
  `,
  "Secondary": styled(ButtonConfig)`
    background-color: ${props => props.bg ? props.bg : "#ebe047"};
  `,
}