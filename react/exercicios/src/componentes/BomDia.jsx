import React  from "react"

// eslint-disable-next-line import/no-anonymous-default-export
export default props => [
    <h1 key='h1'>Bom dia</h1>,
    <h2 key='h2'>Até breve!</h2>
]
    // Sem nada que envolva o html
    // <React.Fragment> 
    //     <h1>Bom dia {props.nome}, {props.idade}!</h1>
    //     <h2>Até breve!</h2>
    // </React.Fragment>