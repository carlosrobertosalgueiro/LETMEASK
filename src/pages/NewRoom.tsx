import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'

import { Button } from '../components/Button'

import '../styles/auth.scss'

export function NewRoom() {

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

                    <h2>Criar Uma Nova Sala</h2>

                    <form >

                        <input type="text"
                            name=""
                            id=""
                            placeholder="Nome da sala"
                        />

                        <Button type="submit">
                            Criar Sala
                        </Button>

                    </form>

                    <p>
                        Quer Entar em uma sala Existente <a href="#">Click Aqui</a>
                    </p>

                </div>


            </main>


        </div>



    )


}