import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Button from './Button';

const Wrapper = styled.header`
  width: 100%;
  height: 10vh;

  z-index: 1000;

  .container {
    height: 100%;
    background-color: #fff;
    display: flex;
    align-items: center;
    padding: 10px 0;
    justify-content: space-between;

    .logo {
      height: 100%;
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
        padding-left: 2rem;
        font-size: 1.6rem;
      }

      button {
        background-color: var(--red);
        border: none;
        outline: none;
        color: #fff;
        margin: auto 1rem;
        padding: 0.5rem 1.5rem;
        font-size: 1.6rem;
        border-radius: 2rem;
        font-weight: 700;
        cursor: pointer;
      }
    }
  }
`;

const Navbar = () => {
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
            <a className="nav-link">HOME</a>
          </Link>
          <Link href="/travel">
            <a className="nav-link">TRAVEL</a>
          </Link>
          <button>Book Now</button>
        </nav>
      </div>
    </Wrapper>
  );
};

export default Navbar;
