import React, { useState } from 'react'
import { useRouter } from 'next/router'
import nookies from 'nookies'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    header {
        display: none;
        visibility: hidden;
    }
`

export default function LoginScreen() {
    const router = useRouter()
    const [githubUser, setGithubUser] = useState('')

  return (
    <>
    <GlobalStyle />
    
    <main style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <div className="loginScreen">
        <section className="logoArea">
          <img src="https://alurakut.vercel.app/logo.svg" />

          <p><strong>Conecte-se</strong> aos seus amigos e familiares usando recados e mensagens instantâneas</p>
          <p><strong>Conheça</strong> novas pessoas através de amigos de seus amigos e comunidades</p>
          <p><strong>Compartilhe</strong> seus vídeos, fotos e paixões em um só lugar</p>
        </section>

        <section className="formArea">
          <form className="box" onSubmit={(e) => {
            e.preventDefault()
            fetch('https://alurakut.vercel.app/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'  
                },
                body: JSON.stringify({ githubUser: githubUser })
            })
            .then(async (res) => {
                const resServer = await res.json()
                const token = resServer.token
                nookies.set(null, 'USER_TOKEN', token, {
                    path: '/',
                    maxAge: 86400 * 7,
                })
                githubUser.length === 0 ? alert("Digite seu usuário no campo") : router.push('/')
            })
            }}>
            <p>
              Acesse agora mesmo com seu usuário do <strong>GitHub</strong>!
          </p>
            <input 
            className='input'
            placeholder="Usuário" 
            value={githubUser}
            onChange={(e) => {
                setGithubUser(e.target.value)
            }}
            />
            <button type="submit">
              Login
            </button>
          </form>

          <footer className="box">
            <p>
              Ainda não é membro? <br />
              <a href="https://github.com" target="_blank">
                <strong>
                  Crie uma conta no github
              </strong>
              </a>
            </p>
          </footer>
        </section>

        <footer className="footerArea">
          <p>
            © 2021 alura.com.br - <a href="https://github.com/Hebert324">Site Criado por Hebert Rocha</a>
          </p>
        </footer>
      </div>
    </main>
    </>
  )
}