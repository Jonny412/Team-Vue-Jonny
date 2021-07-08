/**
 * Eseguire il seguente test all' interno dello stesso file.
 *  
 */

//# 1 - strutturare una variabile json di nome auto con eventuali 3 key < anno, modello, colore > e valori vuoti. 
var auto ={
    


    "anno" : "",
    "modello": "",
    "colore": "",
}

auto.anno = "2020"


//# 2 - strutturare un oggetto array di nome mezziDiTrasporto con tre elementi e ogni elemento abbia  key < _id, modello, colore, anno >
var mezziDiTrasporto = [

    {
    
    "id" : "1",
    "modello": "alfa147",
    "colore": "red",
    "anno":"2020",
    },

    {
        
        "id" : "2",
        "modello": "kawasakyNinja",
        "colore": "green",
        "anno":"2020",

    },

    {
        
            "id" : "3",
            "modello": "canuto",
            "colore": "blue",
            "anno":"2020",
    
    }
]
var uno=[];
var id;

function prova(){
    return uno[id].modello;
}
mezziDiTrasporto[1].colore
//# 3 - strutturare una function che ritorni il valore del modello utilizzando l'oggetto della domanda 2
function ritornaModello(id, arr){
   return  arr[id].modello

   //qui viene spiegata la logica della funzione, ed è possibile applicarla con altri oggetti di array
}

ritornaModello(1,mezziDiTrasporto)
//questa funzione mi ritorna come valore di modello


//# 4  - indicare in ordine quali sono i lifecycle di Vue
beforeCreate
create
beforeMount
mounted
beforeUpdate
update
beforeDestroy
Destroy
//# 5 - mapActions va inserito nelle computed o nei methods?
methods

//# 6 - mapState va inserito nelle computed o nei methods?
computed

//# 7 - mapGetters va inserito nelle computed o nei methods?

computed
//# 8 - mapMutations va inserito nelle computed o nei methods?

methods
//# 9 le mutations sono asyncrone ?
no


//# 10 indicare almeno 3 direttive per i template

v-if / v-else, v-for, v-model, v-bind, v-on, v-once. 