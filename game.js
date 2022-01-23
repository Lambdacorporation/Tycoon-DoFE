//vypocet coinů/s
var vyroba = 0;
var sklonovani_vyroba = "coinů"
if (vyroba == 1) sklonovani_vyroba = "coin";
if ((vyroba >= 2)&&(vyroba < 5)) sklonovani_vyroba = "coiny";
if (vyroba >= 5) sklonovani_vyroba = "coinů";
vyroba = (prijem_1*pocet_prijem_1)+(prijem_10*pocet_prijem_10);
//definování cen
var prijem_1 = 1;
var cena_prijem_1 = 10;
var prijem_10 = 10;
var cena_prijem_10 = 500;
var prijem_100 = 100;
var cena_prijem_100 = 2000;;
var cena_dotace_trebic = 10000;
var dotace_trebic = 5000000;
var cena_oken = 10600000;
var cena_strechy = 30450000;

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

//Hráč chce překliknout na další nebo předchozí stránku výdělků
var strana = 1;
var celkemstran = 2;
function dalsi(){
    strana += 1;
    if (strana > celkemstran){
        strana = 1;
        document.getElementById("vydelky2").style.display = "none";
        document.getElementById("vydelky1").style.display = "grid";
    }
    if (strana == 2){
        document.getElementById("vydelky2").style.display = "grid";
        document.getElementById("vydelky1").style.display = "none";
    }
}
function zpet(){
    strana -= 1;
    if (strana < 1){
        strana = celkemstran;
        document.getElementById("vydelky1").style.display = "none";
        document.getElementById("vydelky2").style.display = "grid";
    }
    if (strana == 1){
        document.getElementById("vydelky2").style.display = "none";
        document.getElementById("vydelky1").style.display = "grid";
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
    document.getElementById("coiny").innerHTML = coiny;
}
//Trvalý výdělek 1 coin/s
var pocet_prijem_1 = 0;
function dostat_prijem_1(){
    coiny += prijem_1 * pocet_prijem_1;
    document.getElementById("coiny").innerHTML = coiny;
}
function koupit_prijem_1(){
    if(coiny < cena_prijem_1){
        document.getElementById("chybapenize").style.visibility = "visible";
        return;
    }
    pocet_prijem_1 += 1;
    coiny -= cena_prijem_1;
    vyroba = prijem_1 * pocet_prijem_1;
    document.getElementById("coiny").innerHTML = coiny;
    vyroba = (prijem_1*pocet_prijem_1)+(prijem_10*pocet_prijem_10);
    document.getElementById("vyroba").innerHTML = vyroba + " " + sklonovani_vyroba + "/s";
}
//Trvalý výdělek 10 coin/s
var pocet_prijem_10 = 0;
function dostat_prijem_10(){
    coiny += prijem_10 * pocet_prijem_10;
    document.getElementById("coiny").innerHTML = coiny;
}
function koupit_prijem_10(){
    if(coiny < cena_prijem_10){
        document.getElementById("chybapenize").style.visibility = "visible";
        return;
    }
    pocet_prijem_10 += 1;
    coiny -= cena_prijem_10;
    vyroba = prijem_10 * pocet_prijem_10;
    document.getElementById("coiny").innerHTML = coiny;
    vyroba = (prijem_1*pocet_prijem_1)+(prijem_10*pocet_prijem_10);
    document.getElementById("vyroba").innerHTML = vyroba + " " + sklonovani_vyroba + "/s";
}
//Trvalý výdělek 10 coin/s
var pocet_prijem_100 = 0;
function dostat_prijem_100(){
    coiny += prijem_100 * pocet_prijem_100;
    document.getElementById("coiny").innerHTML = coiny;
}
function koupit_prijem_100(){
    if(coiny < cena_prijem_100){
        document.getElementById("chybapenize").style.visibility = "visible";
        return;
    }
    pocet_prijem_100 += 1;
    coiny -= cena_prijem_100;
    vyroba = prijem_10 * pocet_prijem_10;
    document.getElementById("coiny").innerHTML = coiny;
    vyroba = (prijem_1*pocet_prijem_1)+(prijem_10*pocet_prijem_10);
    document.getElementById("vyroba").innerHTML = vyroba + " " + sklonovani_vyroba + "/s";
}
//Dotace od města Třebíče
var koupeno_dotace_trebic = false;
function mesto_dotace(){
    if (coiny < cena_dotace_trebic){
        document.getElementById("chybapenize").style.visibility = "visible";
        return;
    }
    if (koupeno_dotace_trebic){
        document.getElementById("chyba_nedostupne").style.visibility = "visible";
        return;
    }
    coiny -= cena_dotace_trebic;
    document.getElementById("pocet_penez").innerHTML = dotace_trebic;
    document.getElementById("info_dotace").style.visibility = "visible";
    coiny += dotace_trebic;
    document.getElementById("coiny").innerHTML = coiny;
    koupeno_dotace_trebic = true;
    document.getElementById("trebic_nedostupne").innerHTML = "NEDOSTUPNÉ";
}
//Odkliknutí OK na chybové hlášce
function ok_penize(){
    document.getElementById("chyba_nedostupne").style.visibility = "hidden";
    document.getElementById("chybapenize").style.visibility = "hidden";
    document.getElementById("info_dotace").style.visibility = "hidden";
}

//Hráč si kupuje okna
var koupeno_okna = false;
function postav_okna(){
    if (coiny < cena_oken){
        document.getElementById("chybapenize").style.visibility = "visible";
        return;
    }
    if (koupeno_okna){
        document.getElementById("chyba_nedostupne").style.visibility = "visible";
        return;
    }
    coiny -= cena_oken;
    koupeno_okna = true;
    document.getElementById("coiny").innerHTML = coiny;
    document.getElementById("cenaokna").innerHTML = "ZAKOUPENO";
    
}
//Hráč si kupuje střechu
var koupeno_strecha = false;
function postav_strecha(){
    if (coiny < cena_strechy){
        document.getElementById("chybapenize").style.visibility = "visible";
        return;
    }
    if (koupeno_strecha){
        document.getElementById("chyba_nedostupne").style.visibility = "visible";
        return;
    }
    coiny -= cena_strechy;
    koupeno_strecha = true;
    document.getElementById("coiny").innerHTML = coiny;
    document.getElementById("cenastrecha").innerHTML = "ZAKOUPENO";
}
//nastavuje interval 1 sekundu pro každý výdělek
window.setInterval(function() {
    dostat_prijem_1();
    dostat_prijem_10();
    dostat_prijem_100();
}, 1000);
