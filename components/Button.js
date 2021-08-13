import styled from 'styled-components';

const Button = styled.button`
  position: relative;
  min-width: 15rem;
  max-width: 22rem;
  padding: 1.1rem 1.8rem;
  margin-top: 1rem;
  font-size: 1.8rem;
  font-weight: 700;
  color: #fff;
  border: 1px solid var(--red);
  outline: none;
  border-radius: 2rem;
  background-color: var(--red);
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.2s;
  text-align: center;
  cursor: pointer;

  &:hover {
    color: var(--red);
    background-color: #fff;
    border: 1px solid var(--red);
  }
`;

export default Button;
