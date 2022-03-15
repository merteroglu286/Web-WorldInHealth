function ShowRentaCarSearchBar() {
    
    var returnSameRadio = document.getElementById("returnSameRadio");
    var returnSameSearchBar = document.getElementById("returnSameSearchBar");

    var returnDiffrentRadio = document.getElementById("returnDiffrentRadio");
    var returnDifferentSearchBar = document.getElementById("returnDifferentSearchBar");

    


    if(returnSameRadio.checked){
        returnSameSearchBar.style.display = "flex";
        returnSameSearchBar.style.width = "100%";
    }else{
        returnSameSearchBar.style.display = "none";
    }


    if(returnDiffrentRadio.checked){
        returnDifferentSearchBar.style.display = "flex";
        returnDifferentSearchBar.style.width = "100%";
    }else{
        returnDifferentSearchBar.style.display = "none";
    }

    
    
}
    
    
