import styled from 'styled-components/native';
export const Box = styled.View`
  margin-top:${props => props.mT ? props.mT : 0};
  margin-left:${props => props.mL ? props.mL : 0};
  margin-right:${props => props.mR ? props.mR : 0};
  margin-bottom:${props => props.mB ? props.mB : 0};
  padding-bottom:${props => props.pB ? props.pB : 0};
  padding-top:${props => props.pT ? props.pT : 0};
  padding-left:${props => props.pL ? props.pL : 0};
  padding-right:${props => props.pR ? props.pR : 0};
`;
export const Text = styled.Text`
  color:white;
  font-size:${props => props.fS? props.fS : 22};
  font-family:'eras-bold';
`;
export const Background = styled.ImageBackground`
    width: 100%;
    height: 100%;
    flex: 1;
`;
export const Button = styled.TouchableOpacity`
    background-color: ${props => props.bg ? props.bg : "green"};
`;