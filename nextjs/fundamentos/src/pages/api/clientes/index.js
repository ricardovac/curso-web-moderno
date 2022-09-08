export default function handler(req, res) {
  if(req.method === "GET") {
    handleGET()
  } else {
    // caso não for uma requisição GET, cai no Method not allowed
    res.status(405).send()
  }
}

function handleGET(req, res) {
  res.status(200).json({
    id: 3,
    nome: "Maria",
    idade: 33
  })
}