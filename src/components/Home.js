import Button from '@restart/ui/esm/Button'
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import styled from 'styled-components'
import { url } from '../sources/url'


const DivContainerCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
`

export const Home = () => {

    const [cards, setCards] = useState([])

    useEffect(() => {
        getData();
    }, [])

    const getData = async (cards) => {
        let resp = await fetch(url)
        let data = await resp.json()
        setCards(data)
    }

    const deleteData = async (id) => {
        await fetch(url + id, { method: 'DELETE' })
        getData();
    }

    return (
        <div>
            <DivContainerCards>
                {
                    cards.map((data) => (

                        <Card bg="dark" text="light" border="secondary" key={data.id} style={{ width: '300px', height: '' }}>
                            <Card.Img variant="top" src={data.image} />
                            <Card.Body>
                                <Card.Title>{data.name}</Card.Title>
                                <Card.Title>{data.price}$</Card.Title>
                                <Button onClick={() => deleteData(data.id)} variant="danger">Delete Product</Button>
                            </Card.Body>
                        </Card>
                    ))
                }
            </DivContainerCards>
        </div>
    )
}
