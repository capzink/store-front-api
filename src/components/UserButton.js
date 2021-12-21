import React from "react";
import {FaUserMinus, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
//import { useProductsContext } from "../context/products_context";
//import { useCartContext } from "../context/cart_context";
//import { useUserContext } from "../context/user_context";

const UserButton = () => {
  return (
      <Wrapper className="user-btn-wrapper">
          <button type='button' className="auth-btn">Login<FaUserPlus/>
          </button>
      </Wrapper>
  )
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 225px;
 
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
    @media (min-width: 992px) {
    .auth-btn {
      display: none;
    }
  }
`;
export default UserButton;
