import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.grey};
   margin-bottom: 20px;
   
  h2 {
    font-size: 28px;
  }

  p {
    margin-top: 10px;
    font-size: 14px;
  }
`

