import { Header, FilledButton, OutlineButton, Title } from '../../styles/home'
import { Form, Input, Label, Error, CaptiveText, CaptiveLink, Button } from '../../styles/login'
import { useState } from 'react'
import { useContext } from 'react'
import { UserContext } from '../../contexts/user.context'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { loginSchema } from '../../schemas'
import Waves from '../../components/purpleWaves'

export default function Login() {

    const { signIn } = useContext(UserContext)
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(loginSchema)
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
                    <FilledButton to="/register">Cadastrar</FilledButton>
                </nav>
            </Header>
            <main>
                <Form onSubmit={handleSubmit(signIn)}>
                    <Label htmlFor="email">E-mail</Label>
                    <Input type="email" id="email" {...register('email')} />
                    {errors.email && <Error>{errors.email.message as string}</Error>}
                    <Label htmlFor="password">Senha</Label>
                    <Input type={showPassword} id="password" {...register('password')} />
                    {errors.password && <Error>{errors.password.message as string}</Error>}
                    <div onClick={handleShowPassword}><a><i className={eye}></i>Alterar exibição</a></div>
                    <Button type="submit">Entrar</Button>
                    <CaptiveText>
                        Não tem uma conta? <CaptiveLink to="/register">Cadastre-se</CaptiveLink> aqui!
                    </CaptiveText>
                </Form>
            </main>
            <Waves />
        </>
    )
}