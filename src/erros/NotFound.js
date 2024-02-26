import ErroBase from "./ErroBase.js";

class Notfound extends ErroBase{
    constructor(message = "Pagina não encontrada"){
        super(message, 404)
    }

}

export default Notfound