import React from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette';

const Container = styled.button`
    width: 100%;
    height: 48px;
    border: 0;
    border-radius: 4px;
    background-color: ${palette.bittersweet};
    color:white;
    font-size: 16px;
    font-weight: 800;
    outline: none;
    cursor: pointer;
`

interface Iprops extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
}

const Button:React.FC<Iprops> = ({children, ...props}) => {
    return <Container {...props}>{children}</Container>;
};

export default Button;