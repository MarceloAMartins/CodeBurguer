import styled from 'styled-components';

export const Container = styled.div`
background-color: #efefef;
display: flex;
flex-direction: column;
align-items: center;
gap: 35px;
padding: 35px;

.rec.rec-arrow{
    background-color: #9758a6;
    color:#efefef;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border: none;
}

.rec.rec-arrow:hover {
    border: 2px solid #9758a6;
    background-color: #efefef;
    color: #9758a6 ;

.rec.rec-arrow:disabled{
    border: none;
    background-color: #bebebf;
    color:#efefef;

}
}
`

export const CategoryImg = styled.img``

export const Containeritems = styled.div`
display: flex;
flex-direction: column;
`

export const Image= styled.img`
height:200px;
width: 200px;
border-radius: 10px;
`

export const Button = styled.button`
margin-top: 16px;
border-radius: 8px;
background: #9758A6;
height: 40px;
border: none;
color: #FFF;
text-align: center;
font-family: Roboto;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: 100%; 

cursor: pointer;

&:hover{
    opacity: 0.7;
}
&:active{
    opacity: 0.5;
}
`

