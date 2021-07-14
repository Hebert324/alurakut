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
        <a className="boxLink" target="_blank" href={`https://github.com/${props.githubUser}`}>{props.githubUser}</a>
      </p>

      <hr />

      <AlurakutProfileSidebarMenuDefault />
    </Box>
  )
}

export default function Home() {
  const githubUser = "hebert324"
  
  // github API para pessoas que estou seguindo ----------
  const [following, setfollowing] = useState([])

  useEffect(() => {
    fetch(`https://api.github.com/users/${githubUser}/following`)
    .then((response) => {
      if(response.ok){
        return response.json()
      }
      throw new Error("Erro da API do github: " + response.status)
    })
    .then((data) => {
      return setfollowing(data)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])

  const peopleYouAreFollowing = following.slice(0, 6)

  // github API para pessoas que estão me seguindo ---------
  const [followers, setFollowers] = useState([])

  useEffect(() => {
    fetch(`https://api.github.com/users/${githubUser}/followers`)
    .then((response) => {
      if(response.ok){
        return response.json()
      }
      throw new Error("Erro da API do github: " + response.status)
    })
    .then((data) => {
      return setFollowers(data)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])

  const peopleFollwers = followers.slice(0, 6)

  // comunidades
  const [comunits, setComunits] = useState([])

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
            e.target.reset()
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

      {/* Seguindo */}
      <ProfileRelationsBoxWrapper>

        <h2 className="smallTitle">Seguindo <span style={{ color: '#2E7BB4' }}>({following.length})</span></h2>

        <ul>
          {peopleYouAreFollowing.map((following) => {
            return (
              <li key={following.id}>
                <a href={`https://github.com/${following.login}`} target="_blank">
                  <img src={`https://github.com/${following.login}.png`} />
                  <span>{following.login}</span>
                </a>
              </li>            
            )
          })}
        </ul>

        <hr />

      </ProfileRelationsBoxWrapper>

      {/* Seguidores */}
      <ProfileRelationsBoxWrapper>

        <h2 className="smallTitle">Seguidores <span style={{ color: '#2E7BB4' }}>({followers.length})</span></h2>

        <ul>
          {peopleFollwers.map((following) => {
            return (
              <li key={following.id}>
                <a href={`https://github.com/${following.login}`} target="_blank">
                  <img src={`https://github.com/${following.login}.png`} />
                  <span>{following.login}</span>
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
