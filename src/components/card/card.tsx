import React from 'react'
import * as S from './card.style';

type CardProps = {
  title: string
  description: string
}

export default function Card({ title, description }: CardProps) {
  return (
    <S.Wrapper>
      <h2>{title}</h2>
      <p>{description}</p>
    </S.Wrapper>
  )
}
