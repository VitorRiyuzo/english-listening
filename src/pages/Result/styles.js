import styled from 'styled-components/native';
export const Container = styled.View`
    padding:10px;
    align-items: center;
`;
export const Top = styled.View`
    flex-direction:row;
    width:100%;
    margin:20px 0;
    align-items:flex-end;
    justify-content:space-between;
`;
export const ScrollView = styled.ScrollView`
    width:100%;
    height:60%;
`;
export const Table = styled.View`
    background:black;
    opacity:0.8;
    padding:15px;
    border-radius:10px;
    margin-bottom:10%;
`;
export const Row = styled.View`
    flex-direction:row;
    justify-content:space-between;
    border-bottom-color:white;
    padding:10px;
    border-width:1px;
`;