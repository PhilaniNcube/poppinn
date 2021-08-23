import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Button from '../Button';

const Wrapper = styled.section`
  width: 100%;

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 3rem auto;

    .imgBox {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      > div {
        height: 60vh;
        margin: auto;

        img {
          height: 20vh;
        }
      }
    }

    .form {
      width: 100%;
      display: flex;
      justify-content: center;

      form {
        width: 80%;

        .input-group {
          display: flex;
          flex-direction: column;
          margin: 1.5rem 0;

          label {
            color: var(--black);
            font-size: 1.1rem;
          }

          input {
            border: none;
            outline: none;
            border-bottom: 2px solid var(--black);
            height: 4rem;
            padding-left: 1rem;
            padding-top: 0.5rem;
            font-size: 1.7rem;
          }
        }
      }
    }
  }
`;

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, message });
  };

  return (
    <Wrapper>
      <div className="container">
        <div className="imgBox">
          <Image src="/images/stacked_logo.svg" width={500} height={500} />
        </div>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="input-group">
              <label>Email</label>
              <input
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="input-group">
              <label>Message</label>
              <input
                type="text"
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="form-control"
              />
            </div>
            <Button type="submit">Submit</Button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default ContactForm;
