import React, { useState } from 'react'
import { Mutation } from 'react-apollo'
import { gql } from 'apollo-boost';
import { Button } from 'primereact/button';

export const deleteProductMutation = gql`
  mutation deleteProduct($id: ID) {
    deleteProduct(id: $id) {
      id
    }
  }
`;

const DeleteProductForm = (props) => {
    return (
        <div style={{display: 'flex', width: '100%', justifyContent: 'center'}}>
            <Mutation mutation={deleteProductMutation} variables={{id: props.data}}>
                        {postMutation => <Button shape="round" value="large" type="primary" onClick={postMutation}>Delete</Button> }
            </Mutation>
        </div>
    )
}

export default DeleteProductForm
