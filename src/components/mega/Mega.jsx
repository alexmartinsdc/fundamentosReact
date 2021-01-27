import React, {useState} from "react"

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

    function gerarNUmeroNaoContido(min, max, array) {
        const aleatorio = parseInt(Math.random() * (max - min) + min)
        return array.includes(aleatorio) ?
            gerarNUmeroNaoContido(min, max, array) :
            aleatorio
    }
    
    function gerarNumeros(qtde) {
        const numeros = Array(qtde)
        .fill(0)
        .reduce((nums) => {
            const novoNumero = gerarNUmeroNaoContido(1, 61, nums)
            return [...nums, novoNumero]
        }, [])
        .sort((n1, n2) => n1 - n2)
    
        return numeros
    }

    const qtde = props.qtde || 6
    const numerosIniciais = Array(qtde).fill(0)
    const [numeros, setNumeros] = useState(numerosIniciais)

    return (
        <div>
            <h2>Mega</h2>
            <h3>{numeros.join(" - ")}</h3>
            <button onClick={_ => setNumeros(gerarNumeros(qtde))}>
                Gerar números
            </button>
        </div>
    )
}