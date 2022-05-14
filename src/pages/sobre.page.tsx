import student from './../assets/student.svg'
import React from 'react';
import styled from 'styled-components'
import Card from '../components/card/card'
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  padding: 0 20px;
`
const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 20px;
    
  > h1 {
    font-size: 33px;
  }
`

const ResultadoBusca = styled.div`
  margin: 0px 20px;
  font-size: 18px;
  > p > span {
    font-weight: 700;
  }
`

const BuscaCEP = styled.div`
  display: block;
  text-align: center;
  line-height: 25px;
`

export const BotaoLink = styled(Link)`
  display: block;
  text-align: center;
  background-color:${({ theme }) => theme.grey};
  padding: 5px;
  min-width: 100%;
  text-decoration: none;
  color: black;
  font-size: 28px;
  margin: 25px 0px;
`
interface Endereco {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

export default function SobrePage() {
  const [endereco, setEndereco] = React.useState<Endereco>();

  const buscarCep = () => {
    fetch(`http://viacep.com.br/ws/05866-970/json/`)
    .then( data =>  data.json())
    .then( response => setEndereco(response))
  }

  return (
    <Wrapper>
      <TitleWrapper>
        <img src={student} alt="icone de estudante" />
        <h1>Sobre Mim</h1>
      </TitleWrapper>

      <Card title="Meus Hobbies" description='O que eu mais gosto de fazer ?' />
     
      <BuscaCEP>
      <h3>Onde eu Moro ?</h3>
        <p>Meu cep: 05866-970 </p>
        <button onClick={buscarCep}>Buscar meu endereço</button>
      </BuscaCEP>
      <ResultadoBusca>
        <br />
        { endereco && (<>
          <p><span>rua</span>: {endereco.logradouro}</p>
          <p><span>bairro</span>: {endereco.bairro}</p>
          <p><span>localidade</span>: {endereco.localidade}</p>
          <p><span>uf</span>: {endereco.uf}</p>
          </>
        )}
        </ ResultadoBusca>

        <BotaoLink to="/"> Volte para a home </ BotaoLink>

    </Wrapper>
  )
}
