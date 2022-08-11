function moneyBox() {
    let saveCoin = 0;
    function countCoins(coins) {
        saveCoin += coins
        console.log(`MonexBox: $${saveCoin}`)
    }
    return countCoins
}

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);


//=======
const banda = {
    id: 1,
    nombre: 'Radiohead',
    'tipo de musica': 'Rock',
    albunes: ['Pablo Honey', 'Ok Computer', 'In Rainbows'],
  };
  banda.vocalista = undefined;
  console.log('vocalista' in banda);
  delete banda['tipo de musica'];
  console.log('tipo de musica' in banda);