import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  width: 100%;
  background-size: 30%;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url('/images/outline.svg');
  margin: 3rem 0;

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1.5rem;
    margin: 4rem auto;
  }
`;

const Text = styled.div`
  width: 80%;
  margin: 4rem auto;
  text-align: center;

  p {
    font-size: 1.8rem;
    padding: 1rem;
  }

  i {
    font-weight: 700;
    font-size: 1.8rem;
  }
`;

const Description = () => {
  return (
    <Wrapper>
      <Text>
        <p>
          This modern apartment is conveniently located close to popular
          shopping malls like Bryanston & Morningside Shopping Centre as well as
          Nicolway. It’s a mere 8km from Sandton City & the Sandton Gautrain
          Station.
        </p>
        <p>
          Thanks to the uncapped WiFi, you can enjoy Netflix, Showmax, YouTube
          and other streaming sites either from the comfort of the lounge or the
          main bedroom.
        </p>
        <i>“Pop Inn” would be delighted to host you!</i>
      </Text>
      <div className="container">
        <Image
          src="/images/lounge.jpg"
          alt="lounge"
          width={1024}
          height={683}
        />
        <Image
          src="/images/dining.jpg"
          alt="dinning"
          width={1024}
          height={683}
        />
        <Image src="/images/pool.jpg" alt="pool" width={1024} height={683} />
      </div>
    </Wrapper>
  );
};

export default Description;
