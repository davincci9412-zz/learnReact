import React from 'react'
import './button.css';
const Button = ({vieillir, cmb}) => {
  return (
    <button onClick={vieillir}>
      Vieillir de {cmb}
    </button>
  )
}

export default Button