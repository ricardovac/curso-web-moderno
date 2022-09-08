import Navegador from "../components/Navegador"

export default function Inicio() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
      <Navegador texto="Estiloso" destino="/estiloso"/>
      <Navegador texto="Exemplo" destino="/exemplo" cor="#9400d3"/>
      <Navegador texto="JSX" destino="/jsx" cor="crimson"/>
      <Navegador texto="Navegação #01" destino="/navegacao" cor="orange"/>
      <Navegador texto="Navegação #02" destino="/cliente/sp-2/321" cor="green"/>
      <Navegador texto="Componente com estado" destino="/estado" cor="brown"/>
      <Navegador texto="Integração com API #01" destino="/integracao_1" cor="grey"/>
      <Navegador texto="Conteudo Estático" destino="/estatico" cor="#1C1F33"/>

    </div>
  )
}