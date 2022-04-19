const ano = 365
const tna = 0.435

class PlazoFijo {
    constructor(monto , dias) {
        this.monto = monto
        this.dias = dias
        this.total = total()
        this.interesGanado = interesGanado()
    }
    total(){
        let interes = interesGanado(this.monto , this.dias)
        return parseFloat(this.monto) + parseFloat(interes)
    }
    interesGanado(){
        let interes = (monto * tna / ano) * dias
        return interes.toFixed(2)
    }
}