import Layout from "../components/Layout"

// Apartir do build será aplicado o modo estático.
export function getStaticProps() {
  return {
    props: {
      numero: Math.random(),
    }
  }
}

export default function Estatico(props) {

  return (
    <Layout titulo="Conteúdo Estático">
      <div>{props.numero}</div>
    </Layout>
  )
}