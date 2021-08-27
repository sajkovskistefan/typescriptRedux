import React from 'react'

type Props = {
    name: String,
    onClick: () => void
}

const Button: React.FC<Props>  = ({name, onClick})  => {
    return (
        <button 
            onClick={onClick}
            className="btn"
            data-testid="button"
            >
                {name}
        </button>
    )
}

export default Button
