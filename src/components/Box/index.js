import styled from 'styled-components'

const Box = styled.div`
  background: ${props => props.theme.colors.secondary};
  border-radius: 8px;
  padding: 16px;
  overflow-y: auto;
  /* Track */
::-webkit-scrollbar-track {
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: ${props => props.theme.colors.scrollBox}; 
  border-radius: 10px;
}
::-webkit-scrollbar-track {
    background: #00000000;
}

  /* CSS Pré-Pronto */
  margin-bottom: 10px;
  .boxLink {
    font-size: 14px;
    color: ${props => props.theme.colors.name};
    text-decoration: none;
    font-weight: 800;
  }
  .title {
    color: ${props => props.theme.colors.textStandard};
    font-size: 32px;
    font-weight: 400;
    margin-bottom: 20px;
    
  }
  .subTitle {
    color: ${props => props.theme.colors.textStandard};
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 20px;
  }
  .smallTitle {
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 700;
    color: ${props => props.theme.colors.textStandard};
    margin-bottom: 20px;
  }
  hr {
    margin-top: 12px;
    margin-bottom: 8px;
    border-color: transparent;
    border-bottom-color: ${props => props.theme.colors.linhaHr};
  }
  input {
    width: 100%;
    background-color: ${props => props.theme.colors.inputColor};
    color: ${props => props.theme.colors.textStandard};
    border: 0;
    padding: 14px 16px;
    margin-bottom: 14px;
    border-radius: 10000px;
    ::placeholder {
      color: ${props => props.theme.colors.textStandard};
      opacity: 1;
    }
  }
  button {
    border: 0;
    padding: 8px 12px;
    color: #FFFFFF;
    border-radius: 10000px;
    background-color: ${props => props.theme.colors.buttonSubmit};
  }
`
export default Box