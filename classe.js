class Churrasco {
    constructor(homens, mulheres, criancas) {
        this.homens = homens;
        this.mulheres = mulheres;
        this.criancas = criancas;
    }

    totalAdultos() {
        const adultos = this.homens + this.mulheres;
        return adultos;
    }

    totalPessoas() {
        const soma = this.homens + this.criancas + this.mulheres;
        return soma;
    }

    calcularCarne() {
        const carnePorHomen = 0.4;
        const carnePorMulher = 0.32;
        const carnePorCrianca = 0.2;

        const totalCarne = (this.homens * carnePorHomen) + (this.mulheres * carnePorMulher) + (this.criancas * carnePorCrianca);
        return totalCarne;
    }

    calcularPaoDeAlho() {
        const paoDeAlhoPorAdulto = 2;
        const paoDeAlhoPorCrianca = 1;

        const totalPaoDeAlho = (this.homens + this.mulheres) * paoDeAlhoPorAdulto + this.criancas * paoDeAlhoPorCrianca;
        return totalPaoDeAlho;
    }

    calcularCarvao() {
        const carvaoPorPessoa = 1;
        return (this.homens + this.mulheres + this.criancas) * carvaoPorPessoa;
    }

    calcularRefrigerante() {
        const garrafaRefrigerantePorPessoas = Math.ceil((this.homens + this.mulheres + this.criancas) / 5);
        return garrafaRefrigerantePorPessoas;
    }

    calcularCerveja() {
        const cervejaPorPessoa = 3;
        const totalAdultos = this.totalAdultos();
        const totalCervejas = totalAdultos * cervejaPorPessoa;
        return totalCervejas;
    }

    data(){
        const dataAtual = new Date();
        const dia = dataAtual.getDate();
        const mes = dataAtual.getMonth();
        const ano = dataAtual.getFullYear();
        const resultado = `${dia}/${mes}/${ano}`;
        return dataAtual;
    }

    calcularTodos(){
        const totalAdultos = this.totalAdultos();
        const totalPessoas = this.totalPessoas();
        const calcularPaoDeAlho = this.calcularPaoDeAlho();
        const calcularCarvao = this.calcularCarvao();
        const calcularCarne = this.calcularCarne();
        const calcularCerveja = this.calcularCerveja();
        const calcularRefrigerante = this.calcularRefrigerante();
        const data = this.data();
        
        const obj = {
            totalAdultos : totalAdultos,
            totalPessoas : totalPessoas,
            totalPaoDeAlho : calcularPaoDeAlho,
            totalCarvao : calcularCarvao,
            totalCarne : calcularCarne,
            totalCerveja : calcularCerveja,
            totalRefrigerante : calcularRefrigerante,
            data : data
        }

        return  obj
    }


}

// const churrascoDoFimDeSemana = new Churrasco(5, 3, 2);

// const totalCarne = churrascoDoFimDeSemana.calcularTodos();

// console.log(totalCarne)


// const homens = document.getElementById("homens")
// const mulheres = document.getElementById("mulheres")
// const criancas = document.getElementById("criancas")

// const novoChurras = new Churrasco(homens, mulheres, criancas);

// const totalCarne = novoChurras.calcularCerveja();