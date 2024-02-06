import React from 'react'

function Button({
    children,
    type = 'button',
    bgColor = '',
    textColor = '',
    className = '',
    ...props
}) {
    return (
        <div style={{ border: '1px solid black', backgroundColor: '#4CAF4F' }}
            className={`${bgColor} ${className}`}>
            {children}
        </div>
    )
}

export default Button