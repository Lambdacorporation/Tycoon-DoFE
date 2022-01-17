//definování cen
var cena_oken = 10600000;

//Hráč chce rozbalit nebo skrýt obrázek budovy
var skryt = 1;
function budova_skryt(){
    if (skryt > 0){
        skryt = 0;
        document.getElementById("budova_skryt").innerHTML = "˅ rozbalit"; 
        document.getElementById("budova_obraz").style.display = "none";
        document.getElementById("budova").style.height = auto;
    }
    if (skryt < 1){
        skryt = 1;
        document.getElementById("budova_obraz").style.display = "";
        document.getElementById("budova_skryt").innerHTML = "˄ skrýt";
        document.getElementById("budova").style.height = auto;
    }
}

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
//výpočet výdělku
var vydelek = 0;
document.getElementById("vydelek").innerHTML = vydelek;

//Hráč si kupuje okna
function postav_okna(){
    if (coiny < cena_oken){
        document.getElementById("chybapenize").style.visibility = "visible";}
}
function ok_penize(){
    document.getElementById("chybapenize").style.visibility = "hidden";
}
