import React from 'react'
import { Form, Button } from 'react-bootstrap'
import styled from 'styled-components'

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
    return (
        <div>
            <DivContainerForm>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control type="text" placeholder="Insert product name" />
                        <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Product Price</Form.Label>
                        <Form.Control type="text" placeholder="Insert product price" />
                        <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>
                
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Product Image Link</Form.Label>
                        <Form.Control type="text" placeholder="Paste product image link" />
                        <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit">Upload</Button>
                </Form>
                <DivContainerInfo>
                    <h3>Ejemplo de datos para insertar</h3>
                    <p>lorem ipsum dolor sit amet, consectet</p>
                    <p>lorem ipsum dolor sit amet, consectet</p>
                    <p>lorem ipsum dolor sit amet, consectet</p>
                </DivContainerInfo>
            </DivContainerForm>
        </div>
    )
}
