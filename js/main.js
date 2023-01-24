const nome = document.getElementById("name").value;
const km = document.getElementById("km").value;
const age = document.getElementById("age-select").value;
const sendButton = document.getElementById("send_button");
const ticketCostKM = 0.21;
const totalPrice = km * ticketCostKM;
// console.log(`${sendButton}`);


sendButton.addEventListener("click", 
    function(){
        if (age == "under" ) {
            let discountMinorenni = ((totalPrice * 20) / 100);
            let prezzoScontatoMinorenni = totalPrice - discountMinorenni;
            console.log(`${prezzoScontatoMinorenni.toFixed(2)} €`);
        }
        else if (age == "over" ) {
            let discountOver = ((totalPrice * 40) / 100);
            let prezzoScontatoOver = totalPrice - discountOver;
            console.log(`${prezzoScontatoOver.toFixed(2)} €`);
        }
        else{
            console.log(`${totalPrice.toFixed(2)} €`);
        }
    }
);