import React from 'react'
import DiretaFilho from './DiretaFilho'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return (
        <div>
            <DiretaFilho nome="Diego" idade={20} nerd={true}></DiretaFilho>
            <DiretaFilho nome="Ana" idade={16} nerd={false}></DiretaFilho>
        </div>
    )
}