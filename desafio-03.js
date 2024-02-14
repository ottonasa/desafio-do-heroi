class herois {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    atacar() {
        let ataque;

        switch (this.tipo) {
            case 'Mago':
                ataque = "Mágia"
                break;
            case 'Guerreiro':
                ataque = "Espada"
                break;
            case 'Monge':
                ataque = "Artes Marciais"
                break;
            case 'Ninja':
                ataque = "Shuriken"
                break;
            default:
                ataque = "Ataque"
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`);

    }
}

let heroi = new herois("Doutor Estranho", 37, "Mago")

heroi.atacar();