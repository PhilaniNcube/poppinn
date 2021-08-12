import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Wrapper = styled.header`
  width: 100%;
  height: 10vh;
  position: fixed;
  top: 3%;
  left: 0;
  z-index: 1000;

  .container {
    height: 100%;
    background-color: #fff;
    display: flex;
    align-items: center;
    padding: 1.8rem;
    justify-content: space-between;
    /* margin: 1.5rem auto; */
    /* background-color: var(--yellow); */

    .logo {
      color: var(--black);

      a {
        font-size: var(--sub-heading);
        font-weight: var(--medium-font);
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
    }
  }
`;

const Navbar = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="logo">
          <Link href="/">
            <a>Popp Inn</a>
          </Link>
        </div>

        <nav className="nav-links">
          <Link href="/">
            <a className="nav-link">HOME</a>
          </Link>
          <Link href="/travel">
            <a className="nav-link">TRAVEL</a>
          </Link>
        </nav>
      </div>
    </Wrapper>
  );
};

export default Navbar;
