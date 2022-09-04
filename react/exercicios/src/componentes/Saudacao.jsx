import React, { Component } from 'react'

export default class Saudacao extends Component {
	state = {
		tipo: this.props.tipo,
		nome: this.props.nome
	}

	constructor(props) {
		super(props)
		this.setTipo = this.setTipo.bind(this)
	}

	setTipo(e) {
		// Funcao que altera o estado.
		let i = 1
		setInterval(() => {
			this.setState({ tipo: i++ })
		}, 1000);

		this.setState({ tipo: e.target.value })
		// this.setState({tipo: "BlaBla" }) // Quando o estado do input muda o tipo vai para "BlaBla"
	}

	setNome(e) {
		this.setState({ nome: e.target.value })
	}

	render() {
		const { tipo, nome } = this.state
		return (
			<div>
				<hr />
				<h1>{tipo} {nome}</h1>
				<input type="text" placeholder='Tipo...' value={tipo} onChange={this.setTipo} />
				<input type="text" placeholder='Tipo...' value={nome} onChange={e => this.setNome(e)} />
			</div>
		)
	}
}