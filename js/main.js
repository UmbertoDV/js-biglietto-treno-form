const sendButton = document.getElementById("send_button");
const ticketCostKM = 0.21;
const nomePasseggero = document.getElementById("nome-passeggero");
const numeroCarrozza = document.querySelector(".output-carrozza");
const codiceCP = document.querySelector(".output-codice");
const costoBiglietto = document.querySelector(".output-costo");
const tipoOfferta = document.querySelector(".output-offerta");

sendButton.addEventListener("click", 
    function(){

        const randomCP = Math.floor(Math.random() * 9999) + 90000; 
        const randomNumeroCarrozza = Math.floor(Math.random() * 15) + 1;
        const nome = document.getElementById("name").value;
        const km = document.getElementById("km").value;
        const age = document.getElementById("age-select").value;
        const totalPrice = km * ticketCostKM;

        if (!isNaN(km)){
            nomePasseggero.innerHTML = `${nome}`;
            numeroCarrozza.innerHTML = `${randomNumeroCarrozza}`;
            codiceCP.innerHTML = `${randomCP}`;
            tipoOfferta.innerHTML = "Biglietto Standard";
    
            if (age == "under" ) {
                let discountMinorenni = ((totalPrice * 20) / 100);
                let prezzoScontatoMinorenni = totalPrice - discountMinorenni;
                costoBiglietto.innerHTML = `${prezzoScontatoMinorenni.toFixed(2)} €`;
            }
            else if (age == "over" ) {
                let discountOver = ((totalPrice * 40) / 100);
                let prezzoScontatoOver = totalPrice - discountOver;
                costoBiglietto.innerHTML = `${prezzoScontatoOver.toFixed(2)} €`;
            }
            else if (age == "" ) {
                alert("Inserisci la fascia di età");
            }
            else{
                costoBiglietto.innerHTML = `${totalPrice.toFixed(2)} €`;
            }
        }
        else{
            alert("Inserisci un numero nei Kilometri.")
        }
    }
);