
import React from 'react';
import styled from 'styled-components'
import Card from '../components/card/card'

const Wrapper = styled.div`
  padding: 0 20px;
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
      <Card title="Meus Hobbies" description='O que eu mais gosto de fazer ?' />
      <Card title="Meus Trabalhos" description='O que eu ja fiz ?' />

      <h3>Onde eu Moro ?</h3>
      Meu cep: 05866-970

      <button onClick={buscarCep}>Buscar meu endereço</button>

      <br />
      { endereco && (<>
        <p>rua: {endereco.logradouro}</p>
        <p>bairro: {endereco.bairro}</p>
        <p>localidade: {endereco.localidade}</p>
        <p>uf: {endereco.uf}</p>
        <p>PERIGOSO</p>
        </>
      )}
    </Wrapper>
  )
}
