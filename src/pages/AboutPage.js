import React from "react";
import styled from "styled-components";
import carlos from "../assets/carlos.jpg";

const AboutPage = () => {
  return (
    <>
      <Wrapper className="page section section-center">
        <img src={carlos} alt="about" />
        <article>
          <div className="title">
            <h2>Carlos Andres Pinzon</h2>
            <div className="underline"></div>
          </div>
          <p>Description: Working page with random API from fake store</p>
          <p>Learn about: React redux, Styled components and History hook</p>
          <p>Email: capz2003@gmail.com</p>
          <p>
            <a href="https://github.com/capzink">GitHub</a>
          </p>
        </article>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
