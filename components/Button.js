import styled from 'styled-components';

const Button = styled.button`
  position: relative;
  min-width: 15rem;
  max-width: 22rem;
  padding: 1.1rem 1.8rem;
  margin-top: 1rem;
  font-size: 1.8rem;
  font-family: 'Roboto', sans-serif;
  border: 1px solid var(--black);
  color: #fff;
  background-color: var(--black);
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.2s;
  text-align: center;
  cursor: pointer;

  &:hover {
    color: var(--black);
    background-color: var(--light);
  }
`;

export default Button;
