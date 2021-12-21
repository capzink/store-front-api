import React from "react";
import styled from "styled-components";
import aboutImg from "../assets/about.jpeg";

const AboutPage = () => {
  return (
    <>
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="about image" />
        <article>
          <div className="title">
            <h2>Our Story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Over a decade ago, we started a store to sell snowboards online.
            None of the ecommerce solutions at the time gave us the control we
            needed to be successful—so we built our own. Today, businesses of
            all sizes use Home Shopping, whether they’re selling online, in retail
            stores, or on-the-go.
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
