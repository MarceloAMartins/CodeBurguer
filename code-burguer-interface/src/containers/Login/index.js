import React from 'react'
import { useForm } from "react-hook-form"
import { toast } from 'react-toastify'
import {Link} from 'react-router-dom'
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup";

import { useUser } from '../../hooks/UserContext'
import Button from '../../components/Button'
import LoginImg from '../../assets/ImgLogin.svg'
import Logo from '../../assets/Logo_code_burguer.svg'
import api from '../../services/api'
import {
    Container,
    LoginImage,
    ContainerItens,
    Label,
    Input,
    SignInLink,
    ErrorMessage
} from './styles'

function Login() {
    const {putUserData} = useUser()


    const schema = Yup.object().shape({
        email: Yup.string()
            .email('Digite um e-mail válido')
            .required('O campo email é obrigatório'),
        password: Yup.string()
            .required('O campo senha é obrigatória')
            .min(6, 'A senha deve conter no minímo 6 digitos')

    })

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = async clientData => {
        const {data} = await toast.promise(
            api.post('sessions', {
                email: clientData.email,
                password: clientData.password
            }),
            {
                pending: 'Verificando seus dados',
                success: 'Você está logado(a) 👌',
                error: 'Verifique seu e-mail e senha 🤯'
            }
        )

        putUserData(data)
       
    }


    return (
        <Container>
            <LoginImage src={LoginImg} alt="Login-image" />
            <ContainerItens>
                <img src={Logo} alt="Logo" />
                <h1>Login</h1>

                <form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <Label>Email</Label>
                    <Input type='email' {...register("email")} error={errors.email?.message} />
                    <ErrorMessage>{errors.email?.message}</ErrorMessage>

                    <Label>Senha</Label>
                    <Input type='password' {...register("password")} error={errors.password?.message} />
                    <ErrorMessage>{errors.password?.message}</ErrorMessage>

                    <Button type="submit" style={{ marginTop: 10, marginBottom: 25 }} >Sign In</Button>
                </form>

                <SignInLink>
                    Não possui conta?{' '} <Link style={{color:'white'}} to="/cadastro">Sign Up</Link>
                </SignInLink>
            </ContainerItens>

        </Container>
    )
}

export default Login