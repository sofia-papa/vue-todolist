//Rifacciamo l'esercizio della toDoList come fatto assieme in classe,
// suddividendo i nostri -milestone- principalmente in questi step:

//FIRST) Stampare in pagina un item per ogni elemento contenuto in un array;

//SECOND) Ogni item ha una icona "x" associata: cliccando su di essa, l'item viene rimosso dalla lista;

//THIRD) Predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure ciccando su un pulsante,
// il testo digitato sarà aggiunto alla lista

let app = new Vue({
    el: "#app",
    data : {

        listaCasa : ["comodino", "sedia", "poltrona", "piatti", "bicchieri", "posate"],
    },

    methods: {
        
    }
});