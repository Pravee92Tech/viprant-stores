import { gql } from "@apollo/client";
const PRODUCTS_QUERY = gql`
  query {
    productLists {
      productId
      productName
      price
      description
      createdAt
      image {
        id
        url
      }
    }
  }
`;
export default PRODUCTS_QUERY;
