import React from 'react'

import * as S from './header.style';

export default function Header() {
  return (
    <S.Wrapper>
      <S.TitleRow>
        <S.ProfileImage />
        <h1>NOME DO USUÁRIO</h1>
      </S.TitleRow>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sapien turpis, bibendum non purus sit amet, dapibus dapibus nunc. Sed nec semper neque. Nam vitae efficitur enim, et pretium ipsum. Curabitur cursus libero dignissim egestas congue. Donec mattis rhoncus ante ac condimentum. Duis sed mauris ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus nec vestibulum sem, nec finibus turpis. Vivamus in euismod lacus. Curabitur eleifend dapibus leo id aliquet. Curabitur odio nulla, tristique vitae lorem sit amet, porta ornare purus.</p>
    </S.Wrapper>
  )
}
