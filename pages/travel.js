import { Fragment } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 100vw;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 4rem;

  img {
    height: 70%;
  }
`;

export default function Travel() {
  return (
    <Wrapper>
      <img src="/images/travel.svg" alt="logo" />
      <h1>Coming Soon!</h1>
    </Wrapper>
  );
}
