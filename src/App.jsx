import './App.css'
import React from 'react'

import Primeiro from './components/basic/Primeiro'
import ComParametro from './components/basic/ComParametro'
import Fragment from './components/basic/Fragment'
import Aleatorio from "./components/basic/Aleatorio"
import Card from './components/layout/Card'
import Familia from './components/basic/Familia'
import FamiliaMembro from './components/basic/FamiliaMembro'
import ListaAluno from './components/repeticao/ListaAlunos'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ParOuImpar from './components/condicional/ParOuImpar'
import DiretaPai from './components/comunicacao/DiretaPai'
import IndiretaPai from "./components/comunicacao/IndiretaPai"
import Input from "./components/formulario/Input"
import Contador from "./components/contador/Contador"
import Mega from './components/mega/Mega'

// eslint-disable-next-line
export default () =>
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">

            <Card titulo="#01 - Primeiro Componente" color="#bb9b0d">
                <Primeiro></Primeiro>
            </Card>

            <Card titulo="#02 - Com parâmetro" color="#dd1d7d">
                <ComParametro
                    titulo="Situação do aluno"
                    aluno="Pedro Silva"
                    nota={8.4}
                ComParametro />
            </Card>

            <Card titulo="#03 - Fragmento" color="#48bfcf">
                <Fragment></Fragment>
            </Card>

            <Card titulo="#04 - Desafio Aleatório" color="#207a14">
                <Aleatorio min={1} max={100}></Aleatorio>
            </Card>

            <Card titulo="#05 - Componente com Filhos" color="#620c3a">
                <Familia sobrenome="Martins">
                <FamiliaMembro nome="Pedro"></FamiliaMembro>
                <FamiliaMembro nome="Ana"></FamiliaMembro>
                <FamiliaMembro nome="Maria"></FamiliaMembro>
                </Familia>
            </Card>

            <Card titulo="#06 - Repetição" color="#1e0c62">
                <ListaAluno></ListaAluno>
            </Card>

            <Card titulo="#07 - Tabela Produtos" color="#206e6e">
                <TabelaProdutos></TabelaProdutos>
            </Card>

            <Card titulo="#08 - Renderização Condicional" color="#aa0c0c">
                <ParOuImpar numero={20}></ParOuImpar>
            </Card>

            <Card titulo="#09 - Comunicação Direta" color="#0c3318">
                <DiretaPai></DiretaPai>
            </Card>

            <Card titulo="#10 - Comunicação Indireta" color="#8B2323">
                <IndiretaPai></IndiretaPai>
            </Card>

            <Card titulo="#11 - Componente Controlado" color="#EE7600">
                <Input></Input>
            </Card>

            <Card titulo="#12 - Contador" color="#424242">
                <Contador numeroInicial={10}></Contador>
            </Card>

            <Card titulo="#13 - Mega" color="#FF4500">
                <Mega></Mega>
            </Card>

        </div>

    </div>