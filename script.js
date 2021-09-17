class Car {
    constructor(modello, anno, colore, prezzo) {
        this.modello = modello;
        this.anno = anno;
        this.colore = colore;
        this.prezzo = prezzo;
        this.carburante = [];
        this._sconto = 0;
    }
    set sconto(value) {
        this._sconto = value;
    }
    get sconto() { return this._sconto; }
    prezzoScontato() {
        const scontoReale = (this.prezzo / 100) * this._sconto;
        const nuovoPrezzo = this.prezzo - scontoReale;
        return nuovoPrezzo;
    }
}

//1. ISTANZIARE L'OGGETTO: let miaMacchina = new Car(....)
let miaMacchina = new Car('FIAT Punto', 2009, 'bianco', 2999);
// console.log(miaMacchina);

//5. Aggiungendo un campo input per scegliere lo sconto, creo una funzione che al digitare di un numero fa comparire qual è lo sconto
function calcola(sconto) {
    const targhettaPrezzo = document.querySelector('#prezzo');
    if ( sconto > 0 && sconto < 100) {
        miaMacchina.sconto = sconto;
    //3. utilizzare metodo prezzoScontato()
    const prezzoFinale = miaMacchina.prezzoScontato();
    console.log(prezzoFinale);
    //4. stampare il prezzo scontato
    targhettaPrezzo.innerHTML = 'Prezzo imperdibile a € ' + prezzoFinale + ' ( sconto ' + miaMacchina.sconto + '% )';
    } else {
        targhettaPrezzo.innerHTML = 'Al momento nessuno sconto in vista!! :)'
    }
    
}

const caratteristicheMacchina = document.querySelector('#caratteristiche');
caratteristicheMacchina.innerHTML = miaMacchina.modello + '<br>' + miaMacchina.colore + '<br>' + miaMacchina.anno + '<br>' + miaMacchina.prezzo +'€'
//2. settare lo sconto ->>> SETTER
miaMacchina.sconto = 10;


//1. ISTANZIARE L'OGGETTO: let miaMacchina = new Car(....)
//2. settare lo sconto ->>> SETTER
//3. utilizzare metodo prezzoScontato()
//4. stampare il prezzo scontato