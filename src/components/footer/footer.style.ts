import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.grey};
`

export const ListFooter = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 18px;

   > li {
     padding: 2px;
   }
  `;
