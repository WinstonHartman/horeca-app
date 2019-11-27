const FRIS = 5;
const BIER = 8;
const WIJN = 15;
const BITTER8 = 10;
const BITTER16 = 20;

var aantalFris = 0;
var aantalBier = 0;
var aantalWijn = 0;
var aantalbitter8 = 0;
var aantalbitter16 = 0;



function bestellen(){
	var bestelling = prompt ("Welke bestelling wilt u toevoegen?");
	if (bestelling == "bier"){
		aantalBier += Number(prompt("Hoeveel Bier wilt u bestellen?"));
	}
	else if (bestelling == "fris"){
		aantalFris += Number(prompt("Hoeveel Fris wilt u bestellen?"));


	}
	else if (bestelling == "wijn") {
		aantalWijn += Number(prompt("Hoeveel Wijn wilt u bestellen?"));
	}

	else if (bestelling == "snack"){
		var snack1 = prompt("Hoeveel bitterballen wilt u toevoegen (8 of 16)?");

		if (snack1 == "8"){
			aantalbitter8 += Number(prompt("Hoeveel bitterbalschalen van 8 wilt u bestellen?"));
		}
		else if (snack1 == "16"){
		   	aantalbitter16 += Number(prompt("Hoeveel bitterbalschalen van 16 wilt u bestellen?"));
}


			else{
				alert("'U kunt alleen een keuze maken tussen 8 en 16. De snacks zijn niet toegevoegd aan de bestelling.")
			}
			
		
	}
	

	else{
		alert("U heeft een ongeldige invoer gedaan. Uw bestelling kan niet worden toegevoegd.")
		bestellen();
	}
	



var totaalBier = aantalBier * 8;
var totaalFris = aantalFris * 5;
var totaalWijn = aantalWijn * 15;
var totaalbitter8 = aantalbitter8 * 10;
var totaalbitter16 = aantalbitter16 * 20;
var totaalPrijs = totaalWijn + totaalFris + totaalBier + totaalbitter8 + totaalbitter16;



	var confirm = prompt ("Wilt u nog wat bestellen?");
	if (confirm == "ja"){
	bestellen()
	}

	else if(confirm == "nee"){
		var uit =  document.getElementById('uitkomst')
		uit.innerText = "Uw totale prijs is  " +totaalPrijs+ "euro";
	}

    

	}


