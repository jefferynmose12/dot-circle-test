import React from 'react'

const Button = ({className, label, styles}) => {
  return (
    <button style={styles} className={className}>
        {label}
    </button>
  )
}

export default Button