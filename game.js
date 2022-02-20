//vypocet coinů/s
var vyroba = 0;
var sklonovani_vyroba = "coinů"

var zk;
//definování cen
var prijem_1 = 1;
var cena_prijem_1 = 10;
var prijem_10 = 10;
var cena_prijem_10 = 500;
var prijem_100 = 100;
var cena_prijem_100 = 2000;
var prijem_1000 = 1000;
var cena_prijem_1000 = 15000;
var prijem_10000 = 10000;
var cena_prijem_10000 = 140000;
var prijem_100k = 100000;
var cena_prijem_100k = 1200000;

var cena_polystyren = 30000000;
var cena_obklady = 40000000;
var cena_oken = 85000000;
var cena_technika = 100000000;
var cena_strechy = 160500000;
var cena_podlaha = 110000000;
var cena_barvy = 230000000;

var cena_zakladdelnik = 50000;
var cena_strednidelnik = 1000000;
var cena_nejdelnik = 50000000;

//Hráč chce rozbalit nebo skrýt obrázek budovy
var skryto = true;
var a = document.getElementById("budova_obraz").width;
document.getElementById("budova_obraz").innerHTML = (a/3)*2 +"px";
function budova_skryt(){
    if (skryto){
        a = document.getElementById("budova_obraz").width;
        document.getElementById("budova_obraz").style.height = (a/3)*2 +"px";
        document.getElementById("budova_obraz").style.border = "3px solid red";
        document.getElementById("budova_skryt").innerHTML = "˄ skrýt";
        skryto = false;
    }else{
        document.getElementById("budova_obraz").style.height = "0";
        document.getElementById("budova_obraz").style.border = "none";
        document.getElementById("budova_skryt").innerHTML = "v rozbalit";
        skryto = true;
    }
}
function zmena_okna(){
    if (skryto == false){
        if (document.getElementById("budova_obraz").width != a){
            a = document.getElementById("budova_obraz").width;
            document.getElementById("budova_obraz").style.height = (a/3)*2 +"px";
            document.getElementById("budova_obraz").style.border = "3px solid red";
            document.getElementById("budova_skryt").innerHTML = "˄ skrýt";
            skryto = false;
            return;
        }
    }
}
//Hráč chce překliknout na další nebo předchozí stránku výdělků
var strana = 1;
var celkemstran = 3;
function dalsi(){
    strana += 1;
    if (strana > celkemstran){
        strana = 1;
        document.getElementById("vydelky3").style.display = "none";
        document.getElementById("vydelky1").style.display = "grid";
    }
    if (strana == 2){
        document.getElementById("vydelky2").style.display = "grid";
        document.getElementById("vydelky1").style.display = "none";
    }
    if (strana == 3){
        document.getElementById("vydelky3").style.display = "grid";
        document.getElementById("vydelky2").style.display = "none";
    }
}
function zpet(){
    strana -= 1;
    if (strana < 1){
        strana = celkemstran;
        document.getElementById("vydelky3").style.display = "grid";
        document.getElementById("vydelky1").style.display = "none";
    }
    if (strana == 1){
        document.getElementById("vydelky2").style.display = "none";
        document.getElementById("vydelky1").style.display = "grid";
    }
    if (strana == 2){
        document.getElementById("vydelky3").style.display = "none";
        document.getElementById("vydelky2").style.display = "grid";
    }
}
//Hráč chce překliknout na další nebo předchozí stránku věcí potřebných k rekonstrukci
var strana_rekonstrukce = 1;
var celkemstran_rekonstrukce = 3;
function dalsi_rekonstrukce(){
    strana_rekonstrukce += 1;
    if (strana_rekonstrukce > celkemstran_rekonstrukce){
        strana_rekonstrukce = 1;
        document.getElementById("stavba3").style.display = "none";
        document.getElementById("stavba1").style.display = "grid";
    }
    if (strana_rekonstrukce == 2){
        document.getElementById("stavba2").style.display = "grid";
        document.getElementById("stavba1").style.display = "none";
    }
    if (strana_rekonstrukce == 3){
        document.getElementById("stavba3").style.display = "grid";
        document.getElementById("stavba2").style.display = "none";
    }
}
function zpet_rekonstrukce(){
    strana_rekonstrukce -= 1;
    if (strana_rekonstrukce < 1){
        strana_rekonstrukce = celkemstran_rekonstrukce;
        document.getElementById("stavba3").style.display = "grid";
        document.getElementById("stavba1").style.display = "none";
    }
    if (strana_rekonstrukce == 1){
        document.getElementById("stavba2").style.display = "none";
        document.getElementById("stavba1").style.display = "grid";
    }
    if (strana_rekonstrukce == 2){
        document.getElementById("stavba3").style.display = "none";
        document.getElementById("stavba2").style.display = "grid";
    }
}

//výdělek klikáním
var coiny = 0;
var prijem = 1;
var sklonovani = " coinů";
function pracuj(){
    coiny += prijem;
    document.getElementById("coiny").innerHTML = coiny;
}
//Dostávání trvalého výdělku
var prijmy = 0;
var odecty = 0;
function dostat_prijem(){
    coiny += prijmy - odecty
    document.getElementById("coiny").innerHTML = coiny;
}
//Trvalý výdělek 1 coin/s
var pocet_prijem_1 = 0;
function koupit_prijem_1(){
    if(coiny < cena_prijem_1){
        document.getElementById("chybapenize").style.visibility = "visible";
        return;
    }
    pocet_prijem_1 += 1;
    coiny -= cena_prijem_1;
    document.getElementById("coiny").innerHTML = coiny;
}
//Trvalý výdělek 10 coin/s
var pocet_prijem_10 = 0;
function koupit_prijem_10(){
    if(coiny < cena_prijem_10){
        document.getElementById("chybapenize").style.visibility = "visible";
        return;
    }
    pocet_prijem_10 += 1;
    coiny -= cena_prijem_10;
    document.getElementById("coiny").innerHTML = coiny;
}
//Trvalý výdělek 100 coin/s
var pocet_prijem_100 = 0;
function koupit_prijem_100(){
    if(coiny < cena_prijem_100){
        document.getElementById("chybapenize").style.visibility = "visible";
        
        return;
    }
    pocet_prijem_100 += 1;
    coiny -= cena_prijem_100;
    document.getElementById("coiny").innerHTML = coiny;
}
//Trvalý výdělek 1000 coin/s
var pocet_prijem_1000 = 0;
function koupit_prijem_1000(){
    if(coiny < cena_prijem_1000){
        document.getElementById("chybapenize").style.visibility = "visible";
        
        return;
    }
    pocet_prijem_1000 += 1;
    coiny -= cena_prijem_1000;
    document.getElementById("coiny").innerHTML = coiny;
}
//Trvalý výdělek 10000 coin/s
var pocet_prijem_10000 = 0;
function koupit_prijem_10000(){
    if(coiny < cena_prijem_10000){
        document.getElementById("chybapenize").style.visibility = "visible";
        
        return;
    }
    pocet_prijem_10000 += 1;
    coiny -= cena_prijem_10000;
    document.getElementById("coiny").innerHTML = coiny;
}
//Koupit Bitcoin
var pocet_btc = 0;
function koupit_btc(){
    if(coiny < cena_btc){
        document.getElementById("chybapenize").style.visibility = "visible";
        
        return;
    }
    pocet_btc += 1;
    coiny -= cena_btc;
    document.getElementById("btc_pocet").innerHTML = pocet_btc;
    document.getElementById("coiny").innerHTML = coiny;
}
//Prodat Bitcoin
function prodat_btc(){
    if(pocet_btc < 1){
        document.getElementById("chybapenize").style.visibility = "visible";
        
        return;
    }
    pocet_btc -= 1;
    coiny += cena_btc;
    document.getElementById("btc_pocet").innerHTML = pocet_btc;
    document.getElementById("coiny").innerHTML = coiny;
}
//Změna ceny btc
var cena_btc = Math.round(Math.random() * 100000);
document.getElementById("btc_cena").innerHTML = cena_btc;
function btc_zmena(){
    cena_btc = Math.round(Math.random() * 100000);
    document.getElementById("btc_cena").innerHTML = cena_btc;
}
//Trvalý výdělek 100k coin/s
var pocet_prijem_100k = 0;
function koupit_prijem_100k(){
    if(coiny < cena_prijem_100k){
        document.getElementById("chybapenize").style.visibility = "visible";
        return;
    }
    pocet_prijem_100k += 1;
    coiny -= cena_prijem_100k;
    document.getElementById("coiny").innerHTML = coiny;
}
//Odkliknutí OK na chybové hlášce
function ok_penize(){
    document.getElementById("chyba_nedostupne").style.visibility = "hidden";
    document.getElementById("chybapenize").style.visibility = "hidden";
    document.getElementById("all").style.filter = "";
}
//Stavba
//Hráč si kupuje polystyren
var koupeno_polystyren = false;
function postav_polystyren(){
    if (koupeno_polystyren){
        document.getElementById("chyba_nedostupne").style.visibility = "visible";
        
        return;
    }
    if (coiny < cena_polystyren){
        document.getElementById("chybapenize").style.visibility = "visible";
        
        return;
    }
    coiny -= cena_polystyren;
    koupeno_polystyren = true;
    document.getElementById("coiny").innerHTML = coiny;
    document.getElementById("cenapolystyren").innerHTML = "ZAKOUPENO";
    
}
//Hráč si kupuje obklady
var koupeno_obklady = false;
function postav_obklady(){
    if (koupeno_obklady){
        document.getElementById("chyba_nedostupne").style.visibility = "visible";
        
        return;
    }
    if (coiny < cena_obklady){
        document.getElementById("chybapenize").style.visibility = "visible";
        
        return;
    }
    coiny -= cena_obklady;
    koupeno_obklady = true;
    document.getElementById("coiny").innerHTML = coiny;
    document.getElementById("cenaobklady").innerHTML = "ZAKOUPENO";
    
}
//Hráč si kupuje okna
var koupeno_okna = false;
function postav_okna(){
    if (koupeno_okna){
        document.getElementById("chyba_nedostupne").style.visibility = "visible";
        
        return;
    }
    if (coiny < cena_oken){
        document.getElementById("chybapenize").style.visibility = "visible";
        
        return;
    }
    coiny -= cena_oken;
    koupeno_okna = true;
    document.getElementById("coiny").innerHTML = coiny;
    document.getElementById("cenaokna").innerHTML = "ZAKOUPENO";
    
}
//Hráč si pronajímá techniku
var koupeno_technika = false;
function postav_technika(){
    if (koupeno_technika){
        document.getElementById("chyba_nedostupne").style.visibility = "visible";
        return;
    }
    if (coiny < cena_technika){
        document.getElementById("chybapenize").style.visibility = "visible";
        return;
    }
    coiny -= cena_technika;
    koupeno_technika = true;
    document.getElementById("coiny").innerHTML = coiny;
    document.getElementById("cenatechnika").innerHTML = "ZAKOUPENO";
}
//Hráč si kupuje střechu
var koupeno_strecha = false;
function postav_strecha(){
    if (koupeno_strecha){
        document.getElementById("chyba_nedostupne").style.visibility = "visible";
        return;
    }
    if (coiny < cena_strechy){
        document.getElementById("chybapenize").style.visibility = "visible";
        return;
    }
    coiny -= cena_strechy;
    koupeno_strecha = true;
    document.getElementById("coiny").innerHTML = coiny;
    document.getElementById("cenastrecha").innerHTML = "ZAKOUPENO";
}
//Hráč si kupuje podlahu
var koupeno_podlaha = false;
function postav_podlaha(){
    if (koupeno_podlaha){
        document.getElementById("chyba_nedostupne").style.visibility = "visible";
        return;
    }
    if (coiny < cena_podlaha){
        document.getElementById("chybapenize").style.visibility = "visible";
        return;
    }
    coiny -= cena_podlaha;
    koupeno_podlaha = true;
    document.getElementById("coiny").innerHTML = coiny;
    document.getElementById("cenapodlaha").innerHTML = "ZAKOUPENO";
}
//Hráč si kupuje barvy a omítku
var koupeno_barvy = false;
function postav_barvy(){
    if (koupeno_barvy){
        document.getElementById("chyba_nedostupne").style.visibility = "visible";
        return;
    }
    if (coiny < cena_barvy){
        document.getElementById("chybapenize").style.visibility = "visible";
        return;
    }
    coiny -= cena_barvy;
    koupeno_barvy = true;
    document.getElementById("coiny").innerHTML = coiny;
    document.getElementById("cenabarvy").innerHTML = "ZAKOUPENO";
}
//Dělníci
//Hráč si může zaměstnat dělníka
function zamestnat_delnika(){
    if ((koupeno_polystyren)&&(koupeno_obklady)&&(koupeno_okna)&&(koupeno_technika)&&(koupeno_podlaha)&&(koupeno_strecha)&&(koupeno_barvy)){
        document.getElementById("chyba_nemuzestavet").visibility = "hidden";
    }
}
//Dělník Franta
var pocet_zakladdelnik = 0;
var rychlost_zakladdelnik = 0.0001;
function kup_zakladdelnik (){
    if (vyroba < cena_zakladdelnik){
        document.getElementById("chybapenize").style.visibility = "visible";
        return;
    }
    pocet_zakladdelnik += 1;
}
//Dělník Ondra
var pocet_strednidelnik = 0;
var rychlost_strednidelnik = 0.01;
function kup_strednidelnik (){
    if (vyroba < cena_strednidelnik){
        document.getElementById("chybapenize").style.visibility = "visible";
        return;
    }
    pocet_strednidelnik += 1;
}
//Dělník Ludva
var pocet_nejdelnik = 0;
var rychlost_nejdelnik = 1;
function kup_nejdelnik (){
    if (vyroba < cena_nejdelnik){
        document.getElementById("chybapenize").style.visibility = "visible";
        return;
    }
    pocet_nejdelnik += 1;
}
//Aktualizování postupu
var postup = 0;
function postup_pridat(){
    postup += (pocet_zakladdelnik*rychlost_zakladdelnik) + (pocet_strednidelnik*rychlost_strednidelnik) + (pocet_nejdelnik*rychlost_nejdelnik);
    document.getElementById("postup").innerHTML = Math.round(postup*10000)/10000;
}
//Prohra
function prohra(){
    if (coiny <= -10000){
        document.getElementById("prohra").style.visibility = "visible";
        return;
    }
}
function ok_prohra(){
    window.location.href="game.html";
}
//Výhra
function vyhra(){
    if (postup >= 100){
        document.getElementById("vyhra").style.visibility = "visible";
        return;
    }
}
//aktualizování příjmu
function aktualizovatprijem(){
    prijmy = (prijem_1*pocet_prijem_1)+(prijem_10*pocet_prijem_10)+(prijem_100*pocet_prijem_100)+(prijem_1000*pocet_prijem_1000)+(prijem_10000*pocet_prijem_10000)+(prijem_100k*pocet_prijem_100k);
    odecty = (cena_zakladdelnik*pocet_zakladdelnik)+(cena_strednidelnik*pocet_strednidelnik)+(pocet_nejdelnik*rychlost_nejdelnik);
    vyroba = prijmy - odecty;
    if (vyroba == 1) sklonovani_vyroba = "coin";
    if ((vyroba >= 2)&&(vyroba < 5)) sklonovani_vyroba = "coiny";
    if (vyroba >= 5) sklonovani_vyroba = "coinů";
    document.getElementById("vyroba").innerHTML = vyroba + " " + sklonovani_vyroba + "/s";
    if (coiny == 1) sklonovani = " coin";
    if ((coiny >= 2)&&(coiny < 5)) sklonovani = " coiny";
    if (coiny >= 5) sklonovani = " coinů";
    document.getElementById("sklonovani_coiny").innerHTML = sklonovani;
    if (coiny >= 1000) document.getElementById("coiny").innerHTML = Math.round(coiny/100)/10 + "k";
    if (coiny >= 1000000) document.getElementById("coiny").innerHTML = Math.round(coiny/100000)/10 + "mil";
    if (coiny >= 1000000000) document.getElementById("coiny").innerHTML = Math.round(coiny/100000000)/10 + "mld";
}

window.setInterval(function() {
    aktualizovatprijem();
    zmena_okna();
    zamestnat_delnika();
}, 0);
//nastavuje interval 1 sekundu pro každý výdělek
window.setInterval(function() {
    prohra();
    dostat_prijem();
    postup_pridat();
}, 1000);

//nastavuje interval 3 sekundy pro cenu bitcoinu
window.setInterval(function() {
    btc_zmena();
}, 3000);
