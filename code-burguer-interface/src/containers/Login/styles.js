import styled from 'styled-components'

import Background from '../../assets/Background.svg'

export const Container = styled.div`

height: 100vh;
width: 100vw;
background: url('${Background}');
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;


`

export const LoginImage = styled.img`
display: flex;
height: 80%;
`

export const ContainerItens = styled.div`
display: flex;
flex-wrap: wrap;
border-radius: 0 10px 10px 0;
background: rgba(55, 55, 55, 0.95) ;

height: 80%;
padding: 25px 75px;
display: flex;

flex-direction: column;
justify-content: center;

h1{
    display: flex;
    align-self: center;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #ffffff;
    margin-top: 90px;
}

form{
    display: flex;
    flex-direction: column;
}
`

export const Label = styled.p`
display: flex;
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 14.06px;
color: #FFFFFF;
margin-top: 25px;
margin-bottom: 5px;
`

export const Input = styled.input`
width: 391.42px;
height: 38.32px;
border-radius: 5px;
background: #ffffff;
box-shadow: 3px 3px 10px rgba(74, 144, 226,0.19);
border-radius: 5px;
border: ${props => (props.error ? '2px solid #cc1717;' : 'none')};
padding-left: 10px;
`


export const SignInLink = styled.p`
font:normal;
font-weight: normal;
font-size: 14px;
line-height:16.41px;
color: #ffffff;

a {
    cursor: pointer;
    text-decoration: underline;

    &:hover{
        color: greenyellow;
    opacity: 0.8;
}

&:active{
    
    opacity: 0.3;
}

}
`

export const ErrorMessage = styled.p `
font-style: normal;
font-weight: normal;
font-size: 14px;
Line-height: 16px;
color: rgba(204, 23, 23, 1);
margin-top: 2px;
`