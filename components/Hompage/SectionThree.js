import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  width: 100%;
  min-height: 40vh;

  .container {
    height: 100%;

    .text {
      height: 100%;
      width: 70%;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 5rem;

      h2,
      p {
        text-align: center;
        margin-bottom: 1rem;
      }
    }
  }
`;

const SectionThree = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="text">
          <h2 className="section-title">
            Loocking for a relaxing place to stay?
          </h2>
          <p>
            Our properties are well appointend and are furnished to ensure that
            you have a wonderful stay with a personal touch from our hosts
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default SectionThree;
