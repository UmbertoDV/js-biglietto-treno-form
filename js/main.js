const sendButton = document.getElementById("send_button");
const ticketCostKM = 0.21;


sendButton.addEventListener("click", 
    function(){

        const nome = document.getElementById("name").value;
        const km = document.getElementById("km").value;
        const age = document.getElementById("age-select").value;
        const totalPrice = km * ticketCostKM;

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