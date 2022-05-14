import React from 'react'
import Footer from '../components/footer/footer'
import Header from '../components/header/header'
import Menu from '../components/menu/menu'
import { BotaoLink } from './sobre.page'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components'



const ContatoSchema = Yup.object().shape({
    nome: Yup.string()
      .min(2, 'Nome muito curto!')
      .max(50, 'Nome muito longo. Limite de 50 caracteres')
      .required('Necessário Nome para prosseguir.'),
    assunto: Yup.string()
      .min(5, 'Expecifique mais o assunto.')
      .max(50, 'Texto muito longo. Limite de 50 caracteres')
      .required('Campo Obrigatório.'),
    email: Yup.string().email('Email inválido').required('Campo Obrigatório'),
    comentario: Yup.string().min(10, 'Minimo 10 caracteres').required('Campo Obrigatório')   
  });

export const ErrorMessage = styled('p')`
    color: red;
    font-size: 11px;
    padding: 5px 0;
`
export const DefaultLabel = styled('label')`
    min-height: 65px;
    display: flex;
    flex-direction: column;
    
`

export const Wrapper = styled('div')`
    padding: 0 10px;
`

export const H1 = styled('h1')`
    background-color: #c4c4c4;
    height: 10vh;
    text-align: center;
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 700;

`

export default function ContatoPage() {
    const formik = useFormik({
        initialValues: {
            nome: '',
            email: '',
            assunto:'',
            comentario:'',
        },
        onSubmit: async (values) => {
            alert("Mensagem enviada com sucesso.")
        },
        validationSchema: ContatoSchema 
      });
  return (
      <Wrapper>
       <H1>
           Formulário para Contato
       </H1>
    <form className='' onSubmit={formik.handleSubmit}>
        <DefaultLabel htmlFor="nome">
            Nome:
            <input type="text" id="nome" value={formik.values.nome} onChange={formik.handleChange}/>
            <ErrorMessage>{formik.errors.nome}</ErrorMessage>
        </DefaultLabel>
        <DefaultLabel htmlFor="email">
            E-mail:
            <input type="text" id='email' value={formik.values.email} onChange={formik.handleChange}/>
            <ErrorMessage>{formik.errors.email}</ErrorMessage>
        </DefaultLabel>
        <DefaultLabel htmlFor="assunto">
            Assunto:
            <input type="text"  id='assunto' value={formik.values.assunto} onChange={formik.handleChange}/>
            <ErrorMessage>{formik.errors.assunto}</ErrorMessage>
        </DefaultLabel>
        <DefaultLabel htmlFor="comentario">
            Cometário:
            <textarea name="" id="comentario" cols={30} rows={10} onChange={formik.handleChange}>{formik.values.email}</textarea>
            <ErrorMessage>{formik.errors.comentario}</ErrorMessage>
        </DefaultLabel>
        <button type='submit' disabled={!formik.isValid}>Enviar</button>

    </form>
    <BotaoLink to="/"> Volte para a home </ BotaoLink>
     
   </Wrapper>
  )
}


