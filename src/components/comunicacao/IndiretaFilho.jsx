import React from "react"

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    
    const min = 45
    const max = 60
    const gerarIdade = () => parseInt(Math.random() * (max - min)) + min
    const gerarNerd = () => Math.random() > 0.5

    return (
        <div>
            <div>Filho</div>
            <button onClick={
                function (e) {
                    props.quandoClicar("João", gerarIdade(), gerarNerd())
                }
            }>Fornecer informações</button>
        </div>
    )
}