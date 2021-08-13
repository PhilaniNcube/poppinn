import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import Button from '../Button';

const Wrapper = styled.section`
  min-height: 100vh;
  width: 100%;
  margin: 2rem auto;

  .container {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;

    @media screen and (max-width: 800px) {
      grid-template-columns: 1fr;
    }

    .imgBox,
    .info {
      height: 100%;
      width: 100%;
      /* background-color: var(--light); */
    }

    .info {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }

    .info .text {
      text-align: center;
      display: flex;
      flex-direction: column;
      min-height: 70%;
      width: 80%;
      margin: auto;
      padding: 3rem 4rem;

      border-radius: 0.4rem;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
        rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;

      @media screen and (max-width: 800px) {
        transform: translateX(0%);
      }

      p {
        margin: 1rem 0;
      }
    }
  }
`;

const SectionOne = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="info">
          <div className="text">
            <h2 className="section-title">
              <strong>Who</strong> we are
            </h2>

            <p>
              Popp Inn is a dynamic upmarket property management company that is
              passionate about people and the leisure industry.
            </p>
            <p>
              We specialize in two areas, helping investors earn a return on
              their properties by managing the property and advertising it to
              seek clients for short-term to long-term leisure or business
              stays. We utilize very effective platforms like AirBnB,
              Bookings.com and various other social media apps to advertise our
              listings.
            </p>
            <p>
              Our second area of focus is the customers; we ensure that whenever
              our customers book a stay at any of our properties they leave
              having experienced world-class hospitality and exceptional
              service. We love to add a personal touch so that the customer
              feels that all of their needs are met.
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SectionOne;
