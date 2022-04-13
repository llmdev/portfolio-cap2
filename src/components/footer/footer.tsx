import linkedin from '../../assets/linkedin.svg'
import github from '../../assets/github.svg'

import * as S from './footer.style';

export default function Footer() {
  return (
    <S.Wrapper>
      <S.ListFooter>
        <li>
          <a href="https://www.linkedin.com/">
            <img src={linkedin} alt="Linkedin image" />
          </a>
        </li>
        <li>
          <a href="https://github.com/">
            <img src={github} alt="Github Image"/>
          </a>
        </li>
      </S.ListFooter>
    </S.Wrapper>
  )
}
