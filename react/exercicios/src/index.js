import React from 'react'
import ReactDOM from 'react-dom'

import Multi, { BoaNoite } from './componentes/Multiplos'
import Saudacao from './componentes/Saudacao'
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDOM.render(
    <div>
        <Multi.BoaTarde nome="Ana" />
        <BoaNoite nome="Bia" />
        <Saudacao tipo="Bom dia" nome="Ricardo" />
        <Pai nome="Paulo" sobrenome="Silva">
            <Filho nome="Pedro" />
            <Filho nome="Paulo" />
            <Filho nome="Carla" />
        </Pai>
        
    </div>
    , document.getElementById('root'))
// Algo semelhante ao JSX
// $('<h1>).html('React 2')