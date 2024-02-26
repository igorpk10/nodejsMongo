import Notfound from "../erros/NotFound"

function handler404 (req, res, next){
    const erro = new Notfound()
    next(erro)
}

export default handler404