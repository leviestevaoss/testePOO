class ContaCorrente{
    #saldo
    #senha
    #limiteEmprestimo

    constructor(titular,agencia,conta,saldo,senha,limite_empres,){
        this.titular = titular
        this.agencia = agencia
        this.conta = conta
    }

    getSaldo(){
        return this.#saldo
    }

    getSenha(){
        return this.#senha
    }

    getLimite(){
        return this.#limiteEmprestimo
    }
}