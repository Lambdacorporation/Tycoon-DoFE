//výdělek klikáním
var coiny = 0;
var income = 1;
var sklonovani = "coinů";
function pracuj(){
    coiny += income;
    if (coiny == 1) sklonovani = "coin";
    if ((coiny >= 2)&&(coiny < 5)) sklonovani = "coiny";
    if (coiny >= 5) sklonovani = "coinů";
    document.getElementById("coiny").innerHTML = coiny + " " + sklonovani;
    return;
}
//výpočet výdělku
var vydelek = 0;
document.getElementById("vydelek").innerHTML = vydelek;