import React from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    const {max, min} = props
    const aleatorio = parseInt(Math.random() * (max - min)) + min
    return (
        <div>
            <h2>Valor Aleatório</h2>
            <p><strong>Valor mínimo = </strong>{min}</p>
            <p><strong>Valor máximo = </strong>{max}</p>
            <p><strong>Valor obtido = </strong>{aleatorio}</p>
        </div>
    )
}