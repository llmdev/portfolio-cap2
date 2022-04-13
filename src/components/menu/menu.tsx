import student from './../../assets/student.svg'
import rock from './../../assets/rock.svg'
import experience from './../../assets/experience.svg'
import * as S from './menu.style';
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <S.Wrapper>
      <ul>
        <li>
          <Link to="/sobre">
            <img src={student} />
            Sobre
          </Link>
        </li>
        <li>
          <a href="">
            <img src={experience} />
            Experiência
          </a>
        </li>
        <li>
          <a href="">
            <img src={rock} />
            Hobbies
          </a>
        </li>
      </ul>
    </S.Wrapper>
  )
}
