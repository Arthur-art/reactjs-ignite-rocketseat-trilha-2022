import styled, { css } from "styled-components";

export type ButtonVariants = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonContainerProps{
    variant: ButtonVariants
}

const buttonVariants = {
    primary: 'purple',
    secondary: 'orange',
    danger: 'red',
    success: 'green'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 100px;
    height: 40px;

    background: ${props => props.theme.primary};
    color: ${props => props.theme.secondary};

    /* ${props => css`background-color: ${buttonVariants[props.variant]}`} */
`;