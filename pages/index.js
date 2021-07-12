import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'

function ProfileSideBar(props) { 
  return (
    <Box>
      <img src={`https://github.com/${props.githubUser}.png`} style={{ borderRadius: '8px' }} />
    </Box>
  )
}

export default function Home() {
  const githubUser = "hebert324"
  const friends = ["diego3g", "jakeliny", "maykbrito", "zezinnnnn", "rafaballerini", "omariosouto"]
  const comunits = ""

  return(
    <>
    <AlurakutMenu />
    <MainGrid>
      <div className="profileArea" style={{ gridArea: 'profileArea' }}>
        <ProfileSideBar githubUser={githubUser} />
      </div>

      <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
        <Box>
          <h1 className="title">Bem vindo(a)</h1>
          <OrkutNostalgicIconSet />
        </Box>
      </div>

      <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
        <ProfileRelationsBoxWrapper>

          <h2 className="smallTitle">Meus amigos <span style={{ color: '#2E7BB4' }}>({friends.length})</span></h2>

          <ul>
            {friends.map((itemAtual) => {
              return (
                <li>
                  <a href={`/users/${itemAtual}`} key={itemAtual}>
                    <img src={`https://github.com/${itemAtual}.png`} />
                    <span>{itemAtual}</span>
                  </a>
                </li>
              )
            })}
          </ul>

        </ProfileRelationsBoxWrapper>

        <Box>
        <h2 className="smallTitle">Comunidades <span style={{ color: '#2E7BB4' }}>({comunits.length})</span></h2>
        </Box>
      </div>
    </MainGrid>
    </>
  )
}
