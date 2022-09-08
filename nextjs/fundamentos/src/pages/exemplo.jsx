import Cabecalho from "../components/Cabecalho";
import Layout from "../components/Layout";

export default function Exemplo() {
  // props é somente leitura
  return (
    <Layout titulo="Usando Componente">
      <Cabecalho titulo="Next.js & React" />
      <Cabecalho titulo="Aprende next.js na prática" />
    </Layout>
  )
}