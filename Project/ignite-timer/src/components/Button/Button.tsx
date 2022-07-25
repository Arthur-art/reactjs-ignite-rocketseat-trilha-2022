import { ButtonContainer, ButtonVariants } from "./Button.styles"

interface ButtonProps{
    variant?: ButtonVariants
}

export const Button = ({variant = 'primary'}: ButtonProps) =>{

    return (
        <ButtonContainer variant={variant}>Enviar</ButtonContainer>
    )
}