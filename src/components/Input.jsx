import React, { useId } from 'react'

const Input = React.forwardRef(function Input({
    label,
    type = "text",
    className = '',
    ...props
}, ref) {
    const id = useId();
    return (
        <div style={{ border: '1px solid black' }}>
            {label && <label>
                {label}
            </label>}
            <input
                type={type}
                className={className}
                ref={ref}
            />
        </div>
    )
})