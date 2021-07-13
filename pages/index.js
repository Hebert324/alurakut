import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'
import React, { useState, useEffect } from 'react'

function ProfileSideBar(props) { 
  return (
    <Box as="aside">
      <a target="_blank" href={`https://github.com/${props.githubUser}`}><img src={`https://github.com/${props.githubUser}.png`} style={{ borderRadius: '8px' }} /></a>

      <hr />

      <p>
        <a className="boxLink" href={`https://github.com/${props.githubUser}`}>{props.githubUser}</a>
      </p>

      <hr />

      <AlurakutProfileSidebarMenuDefault />
    </Box>
  )
}

export default function Home() {
  // github API
  const githubUser = "hebert324"

  const [followers, setFollowers] = useState([])

  useEffect(() => {
    fetch(`https://api.github.com/users/${githubUser}/following`)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      return setFollowers(data)
    })
  }, [])

  const follower = followers.slice(0, 6)

  // comunidades
  const [comunits, setComunits] = useState([])
  const [titleCommunity, setTitleCommunity] = useState([])
  const [imageCommunity, setImageCommunity] = useState([])

  return(
    <>
    
    <MainGrid>
      <div className="profileArea" style={{ gridArea: 'profileArea' }}>
        <ProfileSideBar githubUser={githubUser} />
      </div>

      <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
        <Box>
          <h1 className="title">Bem vindo(a), {githubUser}</h1>
          <OrkutNostalgicIconSet />
        </Box>

        <Box>
          <h2 className="subTitle">Oque você deseja fazer?</h2>

          <form onSubmit={(e) => {
            e.preventDefault()

            const dadosDoForm = new FormData(e.target)

            const comunit = {
              id: new Date().toISOString(),
              title: dadosDoForm.get("title"),
              image: dadosDoForm.get("image")
            }

            setComunits([...comunits, comunit])
          }}>
            
            <div>
              <input 
              placeholder="Qual vai ser o nome da sua comunidade?" 
              name="title" 
              aria-label="Qual vai ser o nome da sua comunidade?"
              type="text"
              />
            </div>

            <div>
            <input 
              placeholder="Coloque a URL para usarmos de capa" 
              name="image" 
              aria-label="Coloque uma URL para usarmos de capa."
              type="text"
            />
            </div>

            <button>
              Criar Comunidade
            </button>

          </form>

        </Box>
      </div>

      <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>

      {/* Amigos */}
      <ProfileRelationsBoxWrapper>

        <h2 className="smallTitle">Meus amigos <span style={{ color: '#2E7BB4' }}>({followers.length})</span></h2>

        <ul>
          {follower.map((follower) => {
            return (
              <li key={follower.id}>
                <a href={`https://github.com/${follower.login}`} target="_blank">
                  <img src={`https://github.com/${follower.login}.png`} />
                  <span>{follower.login}</span>
                </a>
              </li>            
            )
          })}
        </ul>

        <hr />

      </ProfileRelationsBoxWrapper>

      {/* comunidades */}
      <ProfileRelationsBoxWrapper>

        <h2 className="smallTitle">Comunidades <span style={{ color: '#2E7BB4' }}>({comunits.length})</span></h2>
        
        <ul>
          {comunits.map((comunit) => {
            return (
              <li key={comunit.id}>
                <a href={`/users/${comunit.title}`}>
                  <img src={`${comunit.image}`} />
                  <span>{comunit.title}</span>
                </a>
              </li>            
            )
          })}
        </ul>

        <hr />
      </ProfileRelationsBoxWrapper>
      </div>
    </MainGrid>
    </>
  )
}
