import React, { Component } from 'react'
import decreaseFont from './../../assets/decrease-font.svg'
import increaseFont from './../../assets/increase-font.svg'
import invertColors from './../../assets/invert-colors.svg'
import webAcessibillity from './../../assets/webAcessibillity.svg'
import * as S from './acessibillity.style';

export class Acessibillity extends Component {
  render() {
    return (
      <S.Wrapper>
        <li>
          <img src={decreaseFont} />
        </li>
        <li>
          <img src={increaseFont} />
        </li>
        <li>
          <img src={invertColors} />
        </li>
        <li>
          <img src={webAcessibillity} />
        </li>
      </S.Wrapper>
    )
  }
}

export default Acessibillity