import styled from "styled-components/native";

export const Container = styled.View`

    background: #820AD1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const LogoNU = styled.Image`
    top: 50px;
    position: absolute;
    width: 200px;
    height: 200px;

`
export const Title = styled.Text`
    display: flex;
    flex-direction: column;
    width: 90%;
    top: 260px;
    position: absolute;
    left: 40px;
`
export const InputForm = styled.TextInput`
    margin-top: 20px;
    font-size: 15px;
    border-radius: 50px;
    background: #E7E7E7;
    border: none;
    outline: none;
    width: 95%;
    height: 60px;
    padding-left: 20px;
    margin-left: -10px;
    color: gray;

`

export const TextMinimal = styled.Text`
    text-align: center;
    margin-top: 20px;
    margin-left: 20px;
    font-size: 12px;
    max-width: 300px;
    color: gray;
`
export const TextNavigation = styled.TouchableOpacity`
    color: white;
    
`
export const BtnLogar = styled.TouchableOpacity`
    margin-top: 50px;
    font-size: 15px;
    width: 92%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70px;
    background: #9500F6;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 50px;

`