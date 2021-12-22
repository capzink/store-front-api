import React, {useState}from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Counter from './Counter'


const Product = ({image, title, price, id}) => {

   const [status, setStatus] = useState("Started");
   

  return (
    <Wrapper>
      <span>
        <Counter status={status} setStatus={setStatus} />
      </span>
      <div className="featured ">
        <img src={image} alt={title} />
      </div>
      <footer>
        <h5>{title}</h5>
        <p>${price} USD</p>
        <Link to={`/products/${id}`}>
          <button disabled={status==="Stopped"} className="btn-p">More Details</button>
        </Link>
      </footer>
    </Wrapper>
  );
};
const Wrapper = styled.article`
  margin-top: 100px;


  .featured {
    margin-bottom: 5rem;
    display: grid;
    gap: 2.5rem;
    img {
      height: 220px;
      width: 100%;
      object-fit: contain;
      border-radius: var(--radius);
      transition: var(--transition);
    }
  }
  }
  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  footer h5 {
    flex-shrink: 2;
  }
  footer h5,
  footer p {
    margin-bottom: 0;
    font-weight: 300;
    font-size: 0.7rem;
  }
  footer p {
    color: var(--clr-primary-5);
    letter-spacing: var(--spacing);
    flex-shrink: 0;
  }
`;
export default Product;
