import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import styled from 'styled-components'
import { url } from '../sources/url'

const DivContainerForm = styled.div`
    margin-top: 200px;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const DivContainerInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 200px;
`

export const Edit = () => {

    const [items, setItems] = useState({
        name: '',
        price: '',
        image: '',
    })

    const { name, price, image } = items;

    const postData = async () => {
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                name: items.name,
                price: items.price,
                image: items.image
            }),
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        })
    }

    const handleChanged = ({ target }) => {
        setItems({
            ...items,
            [target.name]: target.value
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <DivContainerForm>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control value={name} name="name" type="text" placeholder="Insert product name" onChange={handleChanged} />
                        <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Product Price</Form.Label>
                        <Form.Control value={price} name="price" type="text" placeholder="Insert product price" onChange={handleChanged} />
                        <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Product Image Link</Form.Label>
                        <Form.Control value={image} name="image" type="text" placeholder="Paste product image link" onChange={handleChanged} />
                        <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>
                    <Button onClick={() => postData()} variant="primary" type="submit">Upload</Button>
                </Form>
                <DivContainerInfo>
                    <h3>Example Data to paste on inputs</h3>
                    <h5>Name</h5>
                    <p>NAVE DE LOS GUARDIANES</p>
                    <h5>Price</h5>
                    <p>999900</p>
                    <h5>Image Link</h5>
                    <p>https://cdn.shopify.com/s/files/1/0254/0093/4474/products/15807_553x553.jpg?v=1635564037</p>
                </DivContainerInfo>
            </DivContainerForm>
        </div>
    )
}
