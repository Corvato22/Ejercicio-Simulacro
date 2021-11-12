import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const DivContainerNavbar = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    font-size: 20px;
    margin-right: 40px;
`

export const Navbar = () => {
    return (
        <div>
            <DivContainerNavbar>
                <nav>
                    <StyledLink to="/Home">HOME</StyledLink>
                    <StyledLink to="/Edit">ADD ITEMS</StyledLink>
                </nav>
            </DivContainerNavbar>
        </div>
    )
}