import React from 'react';
import styled from 'styled-components';
import Hero from '../components/About/Hero';
import SectionOne from '../components/About/SectionOne';

const Wrapper = styled.div`
  width: 100%;
`;

const about = () => {
  return (
    <Wrapper>
      <Hero />
      <SectionOne />
    </Wrapper>
  );
};

export default about;
