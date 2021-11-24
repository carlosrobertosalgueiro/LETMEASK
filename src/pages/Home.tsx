import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'


import '../styles/auth.scss'

export function Home() {

    return (
        <div id="page-auth">

            <aside>
                <img src={illustrationImg} alt="" />
                <strong> Crie salas de Q&amp;A ao vivo </strong>
                <p>Tire duvidas da sua audiência em tempo real</p>
            </aside>

            <main>
                <div className="main-content">
                <img src={logoImg} alt="Letmeask" />

                <button className="create-room">
                    <img src={googleIconImg} alt="Icone google" />
                    Crie sua sala com o google
                </button>
                <div className="separator" >ou entre na sala</div>
                <form >

                    <input type="text"
                        name=""
                        id=""
                        placeholder="Digite o nome da sala"
                    />

                    <button type="submit"> Entar na sala</button>

                </form>

                </div>


            </main>


        </div>



    )
}