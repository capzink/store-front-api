
import styled from "styled-components";

const ProductImages = ({product}) => {
    const {image} = product
  return (
    <Wrapper>
        <img src={image} alt="main" className="main"/>
    </Wrapper>
  )
};

const Wrapper = styled.section`

  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
`;

export default ProductImages;
