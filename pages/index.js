import styled from 'styled-components'

// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `

const Box = styled.div`
background-color: #ffffff;
border-radius: 8px;
`

export default function Home() {
  return(
    <main>
      <Box>Imagem</Box>
      <Box>Bem vindo</Box>
      <Box>Comunidades</Box>
    </main>
  )
}
