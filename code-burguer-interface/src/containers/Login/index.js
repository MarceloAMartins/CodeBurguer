import { yupResolver } from "@hookform/resolvers/yup"

import React from 'react'
import { useForm } from "react-hook-form"


import * as Yup from "yup";

import LoginImg from '../../assets/ImgLogin.svg'
import Logo from '../../assets/Logo_code_burguer.svg'

import {
    Container,
    LoginImage,
    ContainerItens,
    Label,
    Input,
    Button,
    SignInLink
} from './styles'

function Login() {
    const schema=Yup.object().shape({
        email: Yup.string().email('Digite um e-mail válido').required('O email é obrigatório'),
        password: Yup.string().required(' A senha deve conter no minímo 6 digitos'),
    })

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
      resolver: yupResolver(schema),
    })
    const onSubmit = (data) => console.log(data)

    return (
        <Container>
            <LoginImage src={LoginImg} alt="Login-image" />
            <ContainerItens>
                <img src={Logo} alt="Logo" />
                <h1>Login</h1>
                
                <form noValidate onSubmit={handleSubmit(onSubmit)}>
                <Label>Email</Label>
                <Input type='email' {...register("email")}/>
                <p>{errors.email?.message}</p>

                <Label>Senha</Label>
                <Input type='password' {...register("password")}/>
                <p>{errors.senha?.message}</p>

                <Button type="submit" >Sign In</Button>
                </form>

                <SignInLink>
                    Não possui conta? <a>Sign Up</a>
                </SignInLink>
            </ContainerItens>

        </Container>
    )
}

export default Login