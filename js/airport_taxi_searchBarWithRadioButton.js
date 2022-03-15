function ShowAirportTaxiSearchBar(){
    var goingRadio = document.getElementById("goingRadio");
    var goingSearchBar = document.getElementById("goingSearchBar");

    var roundTripRadio = document.getElementById("roundTripRadio");
    var roundTripSearchBar = document.getElementById("roundTripSearchBar");


    if(goingRadio.checked){
        goingSearchBar.style.display = "flex";
        goingSearchBar.style.width = "100%";
    }else{
        goingSearchBar.style.display = "none";
    }

    if(roundTripRadio.checked){
        roundTripSearchBar.style.display = "flex";
        roundTripSearchBar.style.width = "100%";
    }else{
        roundTripSearchBar.style.display = "none";
    }
}