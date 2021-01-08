import React, { useState }  from 'react'
import './addProductForm.sass'
import { Mutation } from 'react-apollo'
import { gql } from 'apollo-boost';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';

export const addProductMutation = gql`
  mutation addProduct($name: String!, $description: String!, $quantity: Int!, $image: String!, $size: String!, $price: Int!) {
    addProduct(name: $name, description: $description, quantity: $quantity, image: $image, size: $size, price: $price) {
      name
    }
  }
`;

const AddProductForm = () =>  {

    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [startQuantity, setQuantity] = useState();
    const [image, setImage] = useState();
    const [size, setSize] = useState();
    const [startPrice, setPrice] = useState();

    const price = parseInt(startPrice)
    const quantity = parseInt(startQuantity)



    return (
        <div>
            <div className='add-form-cont'>
                <form>
                    <div className='input-cont'>
                        <InputText
                            placeholder='Name'
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div className='input-cont'>
                        <InputTextarea
                            placeholder='Description'
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                        />
                    </div>
                    <div className='input-cont'>
                        <InputText 
                            placeholder='Quantity'
                            value={startQuantity}
                            onChange={e => setQuantity(e.target.value)}
                        />
                    </div>
                    <div className='input-cont'>
                        <InputText
                            placeholder='Image' 
                            value={image}
                            onChange={e => setImage(e.target.value)}
                        />
                    </div>
                    <div className='input-cont'>
                        <InputText
                            placeholder='Size' 
                            value={size}
                            onChange={e => setSize(e.target.value)}
                        />
                    </div>
                    <div className='input-cont'>
                        <InputText
                            placeholder='Price' 
                            value={startPrice}
                            onChange={e => setPrice(e.target.value)}
                        />
                    </div>   
                    <Mutation mutation={addProductMutation} variables={{ name, description, quantity, image, size, price}}>
                        {postMutation => <Button shape="round" value="large" type="primary" onClick={postMutation}>Add Product</Button> }
                    </Mutation>
                </form>
            </div>
        </div>

    );
}
  
export default AddProductForm;
  

