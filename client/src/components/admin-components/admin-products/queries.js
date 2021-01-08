import { gql } from 'apollo-boost';

export const productsQuery = gql`
  query productsQuery {
    products {
      id
      name
      quantity
      description
      size
      price
    }
  }
`;
