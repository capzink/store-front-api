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
  margin-top: 5.5rem;
  margin-bottom:4.5rem;
  .featured {
    display: grid;
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
    margin-top:2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  footer h5 {
    flex-shrink: 2;
    text-align:center
    
  }
  footer h5,
  footer p {
    margin-bottom: 3px;
    font-weight: 300;
    font-size: 0.7rem;
  }
  footer p {
    color: var(--clr-primary-5);
    
  }
button:disabled,
button[disabled]{
  border: 1px solid #999999;
  background-color: #cccccc;
  color: #666666;
  cursor:none;
}
`;
export default Product;
