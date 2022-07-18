import styles from "./Button.module.css"
import { useState } from "react";

interface ButtonProps{
    title:string;
}

export const Button = ({title}: ButtonProps) =>{

    const [count, setCount] = useState(0)

    return (
        <button className={styles.clickCount} onClick={()=> setCount((count)=> count+1)}>{title}, {count}</button>
    )
}