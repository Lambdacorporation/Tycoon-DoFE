//definování cen
var cena_oken = 10600000;
//výdělek klikáním
var coiny = 0;
var prijem = 1;
var sklonovani = "coinů";
function pracuj(){
    coiny += prijem;
    if (coiny == 1) sklonovani = "coin";
    if ((coiny >= 2)&&(coiny < 5)) sklonovani = "coiny";
    if (coiny >= 5) sklonovani = "coinů";
    document.getElementById("coiny").innerHTML = coiny + " " + sklonovani;
    return;
}
function ok_penize(){
    document.getElementById("chybapenize").style.visibility = "hidden";
}
//výpočet výdělku
var vydelek = 0;
document.getElementById("vydelek").innerHTML = vydelek;

//Hráč si kupuje okna
function postav_okna(){
    if (coiny < cena_oken){
        document.getElementById("chybapenize").style.visibility = "visible";}
}
