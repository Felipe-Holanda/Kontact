import { Header, Title, FilledButton, OutlineButton, Main, WellcomeText, Description, MagicDiv } from '../../styles/home'
import logo from '../../assets/splash-home.svg'
import appStore from '../../assets/apple.png'
import playStore from '../../assets/google.png'
import Waves from '../../components/purpleWaves'

export default function Home(): JSX.Element {
    return (
        <>
            <Header>
                <Title>Kontact</Title>
                <nav>
                    <OutlineButton to='/login'>Entrar</OutlineButton>
                    <FilledButton to='/register'>Cadastrar</FilledButton>
                </nav>
            </Header>
            <Main>
                <MagicDiv>
                    <img src={logo} alt="Splash-Art de uma mulher mexendo em um celular." />
                </MagicDiv>
                <MagicDiv>
                    <WellcomeText><span>Este é o </span> Kontact<span>!</span></WellcomeText>
                    <Description>A sua nova maneira de gerenciar seus contatos, e ainda <span>armazená-los</span> em <span>cloud</span>!</Description>
                    <Description>Acesse-os de onde estiver, <span><b>quando</b></span> e <span><b>onde</b></span> quiser!</Description>
                    <div className='row'>
                        <a>
                            <img className="store" src={appStore} alt="Baixar para iOS" />
                        </a>
                        <a>
                            <img className="store" src={playStore} alt='Baixar para Android' />
                        </a>
                    </div>
                </MagicDiv>

            </Main>
        </>
    )
}