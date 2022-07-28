import styled, { css } from 'styled-components'

export type ButtonVariants = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonContainerProps {
  variant: ButtonVariants
}

const buttonVariants = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  success: 'green',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  border-radius: 4px;
  border: 0;
  margin: 0ch;

  background: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};

  /* ${(props) =>
    css`
      background-color: ${buttonVariants[props.variant]};
    `} */
`
