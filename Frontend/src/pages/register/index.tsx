import { Header, FilledButton, OutlineButton, Title } from '../../styles/home'
import { Form, Input, Label, Error, CaptiveText, CaptiveLink, Button } from '../../styles/login'
import { useState } from 'react'
import { useContext } from 'react'
import { UserContext } from '../../contexts/user.context'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { registerSchema } from '../../schemas'
import Waves from '../../components/purpleWaves'

export default function Register() {

    const { signUp } = useContext(UserContext)
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(registerSchema)
    })
    const [showPassword, setShowPassword] = useState('password')
    const [eye, setEye] = useState('bx bxs-show')

    function handleShowPassword() {
        if (showPassword === 'password') {
            setShowPassword('text')
            setEye('bx bxs-hide')
        } else {
            setShowPassword('password')
            setEye('bx bxs-show')
        }
    }

    return (
        <>
            <Header>
                <Title>Kontact</Title>
                <nav>
                    <OutlineButton to="/">Voltar</OutlineButton>
                    <FilledButton to="/login">Entrar</FilledButton>
                </nav>
            </Header>
            <main>
                <Form onSubmit={handleSubmit(signUp)}>
                    <Label htmlFor="name">Nome</Label>
                    <Input type="text" id="name" {...register('name')} />
                    {errors.name && <Error>{errors.name.message as string}</Error>}
                    <Label htmlFor="email">E-mail</Label>
                    <Input type="email" id="email" {...register('email')} />
                    {errors.email && <Error>{errors.email.message as string}</Error>}
                    <Label htmlFor="phone">Telefone</Label>
                    <Input type="text" id="phone" {...register('phone')} />
                    {errors.phone && <Error>{errors.phone.message as string}</Error>}
                    <Label htmlFor="password">Senha</Label>
                    <Input type={showPassword} id="password" {...register('password')} />
                    {errors.password && <Error>{errors.password.message as string}</Error>}
                    <Label htmlFor="confirmPassword">Confirmar senha</Label>
                    <Input type={showPassword} id="confirmPassword" {...register('confirmPassword')} />
                    {errors.confirmPassword && <Error>{errors.confirmPassword.message as string}</Error>}
                    <div onClick={handleShowPassword}><a><i className={eye}></i>Alterar exibição</a></div>
                    <Button type="submit">Cadastrar-se</Button>
                    <CaptiveText>
                        Já possui uma conta? <CaptiveLink to="/login">Autentique-se</CaptiveLink> aqui!
                    </CaptiveText>
                </Form>
            </main>
        </>
    )
}