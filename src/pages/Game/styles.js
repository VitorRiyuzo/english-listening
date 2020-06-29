import styled from 'styled-components/native';
export const Container = styled.View`
    flex-direction:column;
    align-items:center;
    height:50%;
`;
export const Top = styled.View`
    flex-direction:row;
    width:100%;
    justify-content:space-around;
    margin-top:20px;
    margin-bottom:20px;
`;
export const Number = styled.View`
    background:#bec0c2;
    width:35%;
    border-radius:7px;
    max-width:150px;
    height:50px;
    margin-top:70px;
    margin-bottom:20px;
    align-items:center;
    justify-content:center;
`;
export const Key = styled.View`
    background:#343638;
    width:100%;
    padding:10px;
    height:50%;
    justify-content:space-around;
`;
export const ButtonKey = styled.TouchableOpacity`
    background:${props => props.color ? props.color :'#bec0c2'};
    padding:10px;
    border-radius:7px;
    width:30%;
    align-items:center;
`;
export const Row = styled.View`
    flex-direction:row;
    justify-content:space-around;
`