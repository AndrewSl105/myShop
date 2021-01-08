import { gql } from 'apollo-boost';



export const addProductMutation = gql`
  mutation addProduct($name: String!, $description: String!, $quantity: Int!, $image: String!, $size: String!, $price: String!, $productId: ID) {
    addProduct(name: $name, description: $description, quantity: $quantity, image: $image, size: $size, price: $price, productId: $productId ) {
      name
    }
  }
`;

