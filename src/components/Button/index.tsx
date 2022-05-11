import React from 'react'
import styles from './button.module.scss'


interface Props {
    type?: 'button' | 'submit' | 'reset' | undefined,
    onClick?: () => void
    children?: React.ReactNode
}

const Button = ({onClick, type, children }: Props) => {
    return(
        <button 
        className={styles.button}
        onClick={onClick}
        type={type}>
            {children}
        </button>
    )
}

export default Button
