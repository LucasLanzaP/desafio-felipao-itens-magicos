class ItemMagico {
    //TODO: Crie adequadamente um construtor que receba todos os atributos referente ao item mágico:
      constructor(tipo, dano, resistencia) {
          this.tipo = tipoItem;
          this.dano = danoItem;
          this.resistencia = resistenciaItem;
          
      }
      
       calcularDano() {
        return this.tipo === 'arma' ? this.dano * 2 : this.dano;
      }
    }
    
    // Solicita ao usuário para digitar o tipo do item mágico, o dano no item e a resistência do item
    const tipoItem = gets();
    const danoItem = parseInt(gets());
    const resistenciaItem = parseInt(gets());
    
    //TODO: Crie um objeto ItemMagico personalizado com base no tipo escolhido
    const itemPersonalizado = new ItemMagico(tipoItem, danoItem, resistenciaItem); 
    // TODO: Imprima os atributos do item personalizado
    print("Tipo: " + tipoItem);
    print("Dano: " + danoItem);
    print("Resistencia: " + resistenciaItem);
    
    // Calcula e imprime o dano causado pelo item personalizado em um combate simulado
    const danoTotal = itemPersonalizado.calcularDano();
    print("Dano em combate: " + danoTotal);