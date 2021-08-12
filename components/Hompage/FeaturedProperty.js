import React from 'react';
import styled from 'styled-components';
import { IoBedOutline, IoPeopleOutline } from 'react-icons/io5';
import Button from '../Button';

const Wrapper = styled.section`
  width: 100%;
  min-height: 60vh;
  margin: 4rem 0;

  .container {
    min-height: 60vh;
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media screen and (max-width: 800px) {
      grid-template-columns: 1fr;
    }

    .imgBox {
      height: 100%;
      background-image: url('/images/lounge5.jpg');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
    }

    .details {
      height: 100%;
      padding: 5rem;
      background-color: var(--light);
      box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
        rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;

      h3 {
        font-size: var(--medium-title);
        font-family: 'Roboto', sans-serif;
        font-weight: var(--light-font);
        margin: 0.8rem 0;

        strong {
          color: var(--red);
        }
      }

      p {
        margin: 0.3rem 0;
        color: grey;
      }

      .stats {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin: 2rem 0;
        padding-top: 3rem;
        border-top: 1px solid grey;

        .price,
        .capacity {
          width: 50%;
        }

        .price {
          h4 {
            font-family: 'Roboto', sans-serif;
            color: grey;
            text-transform: uppercase;
            font-size: 1.4rem;
            font-weight: var(--light-font);
          }

          h3 {
            color: var(--red);

            span {
              color: grey;
              font-size: 1.6rem;
            }
          }
        }

        .capacity {
          display: flex;
          justify-content: space-around;

          @media screen and (max-width: 800px) {
            flex-direction: column;
          }

          div {
            font-size: 4rem;
            color: var(--red);

            h4 {
              font-family: 'Roboto', sans-serif;
              font-size: 1.8rem;
              font-weight: var(--light-font);
              color: grey;
            }
          }
        }
      }
    }
  }
`;

const FeaturedProperty = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="imgBox"></div>
        <div className="details">
          <h3>
            <strong>Bryanston</strong> Modern Apartment
          </h3>

          <p>
            This modern apartment is situated on the quieter side of Bryanston
            in a newly built picturesque complex.
          </p>

          <div className="stats">
            <div className="price">
              <h4>From</h4>
              <h3>
                R800.00 <span>/night</span>
              </h3>
            </div>
            <div className="capacity">
              <div className="people">
                <IoPeopleOutline className="icon" />
                <h4>4 Guests</h4>
              </div>
              <div className="beds">
                <IoBedOutline className="icon" />
                <h4>2 Bedrooms</h4>
              </div>
            </div>
          </div>

          <Button>View Property</Button>
        </div>
      </div>
    </Wrapper>
  );
};

export default FeaturedProperty;
