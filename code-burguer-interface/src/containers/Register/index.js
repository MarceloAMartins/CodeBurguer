import { yupResolver } from "@hookform/resolvers/yup"
import React from 'react'
import { useForm } from "react-hook-form"
import {Link} from 'react-router-dom'
import { toast } from 'react-toastify'
import * as Yup from "yup";


import Logo from '../../assets/Logo_code_burguer.svg'
import RegisterImage from '../../assets/registerImage.svg' 
import Button from '../../components/Button'
import api from '../../services/api'
import {
    Container,
    Register_Image,
    ContainerItens,
    Label,
    Input,
    SignInLink,
    ErrorMessage
} from './styles'

function Register () {
    const schema = Yup.object().shape({
        name: Yup.string().required('O campo nome é obrigatório'),
        email: Yup.string()
            .email('Digite um e-mail válido')
            .required('O campo email é obrigatório'),
        password: Yup.string()
            .required('A senha é obrigatória')
            .min(6, 'O campo senha deve conter no minímo 6 digitos'),
        confirmPassword: Yup.string()
            .required('A senha é obrigatória')
            .min(6, 'A senha deve conter no minímo 6 digitos')
            .oneOf([Yup.ref('password')], 'As senhas devem ser iguais')

    })

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = async clientData => {
        try{
            const { status } =  await api.post(
                'users',
             {
            name: clientData.name,
            email: clientData.email,
            password_hash: clientData.password
            },
            {validateStatus: () => true}
            )

            if(status===201  || status === 200){
                toast.success('Cadastro executado')
            } else if(status === 409){
                toast.error('E-mail já cadastrado! Faça login para continuar')
            } else {
                throw new Error()
            }

        }
       catch (err) {
        toast.error ('Falha no sistema! Tente novamente')
       }
    }


    return (
        <Container>
            <Register_Image src={RegisterImage} alt="RegisterImg" />
            <ContainerItens>
                <img src={Logo} alt="Logo" />
                <h1>Cadastre-se</h1>

                <form noValidate onSubmit={handleSubmit(onSubmit)}>
                <Label error={errors.name?.message}>Name</Label>
                    <Input type='text' {...register("name")} error={errors.name?.message} />
                    <ErrorMessage>{errors.name?.message}</ErrorMessage>

                    <Label error={errors.email?.message}>Email</Label>
                    <Input type='email' {...register("email")} error={errors.email?.message} />
                    <ErrorMessage>{errors.email?.message}</ErrorMessage>

                    <Label error={errors.password?.message}>Senha</Label>
                    <Input type='password' {...register("password")} error={errors.password?.message} />
                    <ErrorMessage>{errors.password?.message}</ErrorMessage>

                    <Label error={errors.confirmPassword?.message}>Confirmar Senha</Label>
                    <Input type='password' {...register("confirmPassword")} error={errors.confirmPassword?.message} />
                    <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>


                    <Button type="submit" style={{marginTop: 20, marginBottom: 10}} >Cadastro</Button>
                </form>

                <SignInLink>
                    Já possui conta? <Link style={{color: 'white'}} to="/login">Sign In</Link>
                </SignInLink>
            </ContainerItens>

        </Container>
    )
}

export default Register