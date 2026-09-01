import styled from "styled-components/native";

const Overlay = styled.TouchableOpacity`
    flex: 1;
    justify-content: flex-end;
`

const Container = styled.View`
    height: 50%;
    background-color: blue;
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;

    display: flex;
    justify-content: center;
    align-items: center;
`
const Title = styled.Text``
const Description = styled.Text``
const CloseBtn = styled.TouchableOpacity``
const CloseBtnText = styled.Text``

export { CloseBtn, CloseBtnText, Container, Description, Title, Overlay }