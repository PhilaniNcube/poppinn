import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Button from './Button';
import { useRouter } from 'next/router';

const Wrapper = styled.header`
  width: 100%;
  height: 10vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;

  z-index: 1000;

  .container {
    height: 100%;

    display: flex;
    align-items: center;
    padding: 10px 0;
    justify-content: space-between;

    .logo {
      height: 100%;

      @media screen and (max-width: 800px) {
        height: 70%;
        margin: auto 0;
      }
      img {
        height: 100%;
        object-fit: cover;
      }
    }

    .nav-links {
      height: 100%;
      display: flex;
      align-items: center;

      .nav-link {
        padding-left: 1.4rem;
        font-size: 1.6rem;
        text-transform: capitalize;
      }

      button {
        background-color: var(--red);
        border: none;
        outline: none;
        color: #fff;
        margin-left: 2rem;
        padding: 0.5rem 1.5rem;
        font-size: 1.6rem;
        border-radius: 2rem;
        font-weight: 700;
        cursor: pointer;

        @media screen and (max-width: 800px) {
          font-size: 1.3rem;
          padding: 0.5rem 1rem;
        }
      }
    }
  }
`;

const Navbar = () => {
  const router = useRouter();

  const navigate = () => {
    router.push('http://www.booking.com/Share-lfWNCr');
  };

  return (
    <Wrapper>
      <div className="container">
        <div className="logo">
          <Link href="/">
            <img src="/images/logo.svg" alt="Popp Inn" />
          </Link>
        </div>

        <nav className="nav-links">
          <Link href="/">
            <a className="nav-link">Home</a>
          </Link>
          <Link href="/travel">
            <a className="nav-link">Travel</a>
          </Link>
          <Link href="/about">
            <a className="nav-link">About Us</a>
          </Link>
          <button onClick={navigate}>Book Now</button>
        </nav>
      </div>
    </Wrapper>
  );
};

export default Navbar;
