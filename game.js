var level2 = false;
//vypocet coinů/s
var vyroba = 0;
var sklonovani_vyroba = "coinů"
//definování cen a příjmů
var prijem_1 = 1;
var cena_prijem_1 = 100;
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
var prijem_2mil = 2000000;
var cena_prijem_2mil = 50000000;
//definování cen materiálů
var cena_polystyren = 30000000;
var cena_obklady = 40000000;
var cena_oken = 85000000;
var cena_technika = 100000000;
var cena_strechy = 160500000;
var cena_podlaha = 110000000;
var cena_barvy = 230000000;
//proměnné určující, jestli si hráč koupil materiály nebo ne
var koupeno_polystyren = false;
var koupeno_obklady = false;
var koupeno_okna = false;
var koupeno_technika = false;
var koupeno_podlaha = false;
var koupeno_strecha = false;
var koupeno_barvy = false;
//definování cen dělníků v coiny/s
var cena_zakladdelnik = 50000;
var cena_strednidelnik = 1000000;
var cena_nejdelnik = 50000000;
//nápověda
//Hráč si chce zobrazit nápovědu
function infozobraz(){
    ok_penize();
    document.getElementById("info_velke").style.visibility = "visible";
}
function info1(){ok_penize(); document.getElementById("info1").style.visibility = "visible";}
function info2(){ok_penize(); document.getElementById("info2").style.visibility = "visible";}
function info3(){ok_penize(); document.getElementById("info3").style.visibility = "visible";}

//Hráč chce rozbalit nebo skrýt obrázek budovy
var skryto = true;
var a = document.getElementById("budova_obraz").width;
document.getElementById("budova_obraz").innerHTML = (a/3)*2 +"px";
function budova_skryt(){
    if (skryto){
        a = document.getElementById("budova_obraz").width;
        document.getElementById("budova_obraz").style.height = (a/3)*2 +"px";
        document.getElementById("budova_obraz").style.border = "3px solid red";
        document.getElementById("budova_skryt").innerHTML = "˄ skrýt budovu";
        skryto = false;
    }else{
        document.getElementById("budova_obraz").style.height = "0";
        document.getElementById("budova_obraz").style.border = "none";
        document.getElementById("budova_skryt").innerHTML = "v zobrazit budovu";
        skryto = true;
    }
}
//Hráč chce rozbalit nebo skrýt credits
var skrytocredits = true;
function credits_skryt(){
    if (skrytocredits){
        document.getElementById("credits").style.height = "100%";
        document.getElementById("credits").style.visibility = "visible";
        document.getElementById("credits_skryt").innerHTML = "˄ skrýt credits";
        skrytocredits = false;
    }else{
        document.getElementById("credits").style.height = "0";
        document.getElementById("credits").style.visibility = "hidden";
        document.getElementById("credits").style.border = "none";
        document.getElementById("credits_skryt").innerHTML = "v zobrazit credits";
        skrytocredits = true;
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
    nahodny_coin = Math.floor((Math.random() * 4)+1);
    document.getElementById("animace_coin_" + nahodny_coin).style.display = "unset";
    const dobadoschovani = setTimeout(schov_obraz_animace,100);
    function schov_obraz_animace(){
        document.getElementById("animace_coin_" + nahodny_coin).style.display = "none";
    }
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
        ok_penize(); document.getElementById("chybapenize").style.visibility = "visible";
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
        ok_penize(); document.getElementById("chybapenize").style.visibility = "visible";
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
        ok_penize(); document.getElementById("chybapenize").style.visibility = "visible";
        
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
        ok_penize(); document.getElementById("chybapenize").style.visibility = "visible";
        
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
        ok_penize(); document.getElementById("chybapenize").style.visibility = "visible";
        
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
        ok_penize(); document.getElementById("chybapenize").style.visibility = "visible";
        
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
        ok_penize(); document.getElementById("chybapenize").style.visibility = "visible";
        
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
        ok_penize(); document.getElementById("chybapenize").style.visibility = "visible";
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
    document.getElementById("chybadelnik").style.visibility = "hidden";
    document.getElementById("info_start").style.visibility = "hidden";
    document.getElementById("epic_cheat").style.visibility = "hidden";

    document.getElementById("info1").style.visibility = "hidden";
    document.getElementById("info2").style.visibility = "hidden";
    document.getElementById("info3").style.visibility = "hidden";
    document.getElementById("all").style.filter = "";

    document.getElementById("vyhra").style.visibility = "hidden";
    document.getElementById("prohra").style.visibility = "hidden";
}
//Stavba
//Hráč si kupuje polystyren
function postav_polystyren(){
    if (koupeno_polystyren){
        ok_penize(); document.getElementById("chyba_nedostupne").style.visibility = "visible";
        
        return;
    }
    if (coiny < cena_polystyren){
        ok_penize(); document.getElementById("chybapenize").style.visibility = "visible";
        return;
    }
    coiny -= cena_polystyren;
    koupeno_polystyren = true;
    document.getElementById("coiny").innerHTML = coiny;
    document.getElementById("cenapolystyren").innerHTML = "ZAKOUPENO";
    zamestnat_delnika();
}
//Hráč si kupuje obklady
function postav_obklady(){
    if (koupeno_obklady){
        ok_penize(); document.getElementById("chyba_nedostupne").style.visibility = "visible";
        
        return;
    }
    if (coiny < cena_obklady){
        ok_penize(); document.getElementById("chybapenize").style.visibility = "visible";
        
        return;
    }
    coiny -= cena_obklady;
    koupeno_obklady = true;
    document.getElementById("coiny").innerHTML = coiny;
    document.getElementById("cenaobklady").innerHTML = "ZAKOUPENO";
    zamestnat_delnika();
}
//Hráč si kupuje okna
function postav_okna(){
    if (koupeno_okna){
        ok_penize(); document.getElementById("chyba_nedostupne").style.visibility = "visible";
        
        return;
    }
    if (coiny < cena_oken){
        ok_penize(); document.getElementById("chybapenize").style.visibility = "visible";
        
        return;
    }
    coiny -= cena_oken;
    koupeno_okna = true;
    document.getElementById("coiny").innerHTML = coiny;
    document.getElementById("cenaokna").innerHTML = "ZAKOUPENO";
    zamestnat_delnika();
}
//Hráč si pronajímá techniku
function postav_technika(){
    if (koupeno_technika){
        ok_penize(); document.getElementById("chyba_nedostupne").style.visibility = "visible";
        return;
    }
    if (coiny < cena_technika){
        ok_penize(); document.getElementById("chybapenize").style.visibility = "visible";
        return;
    }
    coiny -= cena_technika;
    koupeno_technika = true;
    document.getElementById("coiny").innerHTML = coiny;
    document.getElementById("cenatechnika").innerHTML = "ZAKOUPENO";
    zamestnat_delnika();
}
//Hráč si kupuje střechu
function postav_strecha(){
    if (koupeno_strecha){
        ok_penize(); document.getElementById("chyba_nedostupne").style.visibility = "visible";
        return;
    }
    if (coiny < cena_strechy){
        ok_penize(); document.getElementById("chybapenize").style.visibility = "visible";
        return;
    }
    coiny -= cena_strechy;
    koupeno_strecha = true;
    document.getElementById("coiny").innerHTML = coiny;
    document.getElementById("cenastrecha").innerHTML = "ZAKOUPENO";
    zamestnat_delnika();
}
//Hráč si kupuje podlahu
function postav_podlaha(){
    if (koupeno_podlaha){
        ok_penize(); document.getElementById("chyba_nedostupne").style.visibility = "visible";
        return;
    }
    if (coiny < cena_podlaha){
        ok_penize(); document.getElementById("chybapenize").style.visibility = "visible";
        return;
    }
    coiny -= cena_podlaha;
    koupeno_podlaha = true;
    document.getElementById("coiny").innerHTML = coiny;
    document.getElementById("cenapodlaha").innerHTML = "ZAKOUPENO";
    zamestnat_delnika();
}
//Hráč si kupuje barvy a omítku
function postav_barvy(){
    if (koupeno_barvy){
        ok_penize(); document.getElementById("chyba_nedostupne").style.visibility = "visible";
        return;
    }
    if (coiny < cena_barvy){
        ok_penize(); document.getElementById("chybapenize").style.visibility = "visible";
        return;
    }
    coiny -= cena_barvy;
    koupeno_barvy = true;
    document.getElementById("coiny").innerHTML = coiny;
    document.getElementById("cenabarvy").innerHTML = "ZAKOUPENO";
    zamestnat_delnika();
}
//Dělníci
//Hráč si může zaměstnat dělníka
var muzezamestnat = false;
function zamestnat_delnika(){
    if (koupeno_polystyren && koupeno_obklady && koupeno_okna && koupeno_technika && koupeno_podlaha && koupeno_strecha && koupeno_barvy){
        muzezamestnat = true;
    }
}
//Dělník Franta
var pocet_zakladdelnik = 0;
var rychlost_zakladdelnik = 0.0001;
function kup_zakladdelnik (){
    if (!muzezamestnat){
        ok_penize(); document.getElementById("chybadelnik").style.visibility = "visible";
        return;
    }
    if (vyroba < cena_zakladdelnik){
        ok_penize(); document.getElementById("chybapenize").style.visibility = "visible";
        return;
    }
    pocet_zakladdelnik += 1;
}
//Dělník Ondra
var pocet_strednidelnik = 0;
var rychlost_strednidelnik = 0.01;
function kup_strednidelnik (){
    if (!muzezamestnat){
        ok_penize(); document.getElementById("chybadelnik").style.visibility = "visible";
        return;
    }
    if (vyroba < cena_strednidelnik){
        ok_penize(); document.getElementById("chybapenize").style.visibility = "visible";
        return;
    }
    pocet_strednidelnik += 1;
}
//Dělník Ludva
var ludvik_nepracuje = false;
var pocet_nejdelnik = 0;
var rychlost_nejdelnik = 1;
function kup_nejdelnik (){
    if (ludvik_nepracuje){
        ludvik_nepracuje = false;
        rychlost_nejdelnik = 1;
        document.getElementById("nepracuje").style.visibility = "hidden";
        return;
    }
    if (!muzezamestnat){
        ok_penize(); document.getElementById("chybadelnik").style.visibility = "visible";
        return;
    }
    if (vyroba < cena_nejdelnik){
        ok_penize(); document.getElementById("chybapenize").style.visibility = "visible";
        return;
    }
    pocet_nejdelnik += 1;
}
var cas_lenost = Math.random()*200000;
function lenost (){
    if (pocet_nejdelnik > 0){
        ludvik_nepracuje = true;
        rychlost_nejdelnik = 0;
        document.getElementById("nepracuje").style.visibility = "visible";
        cas_lenost = Math.random()*200000;
    }
}
//Aktualizování postupu
var postup = 0;
function postup_pridat(){
    postup += (pocet_zakladdelnik*rychlost_zakladdelnik) + (pocet_strednidelnik*rychlost_strednidelnik) + (pocet_nejdelnik*rychlost_nejdelnik);
    document.getElementById("postup").innerHTML = Math.round(postup*10000)/10000;
}
//aktualizování příjmu
function aktualizovatprijem(){
    prijmy = (prijem_1*pocet_prijem_1)+(prijem_10*pocet_prijem_10)+(prijem_100*pocet_prijem_100)+(prijem_1000*pocet_prijem_1000)+(prijem_10000*pocet_prijem_10000)+(prijem_100k*pocet_prijem_100k)+(prijem_2mil*pocet_prijem_2mil);
    odecty = (cena_zakladdelnik*pocet_zakladdelnik)+(cena_strednidelnik*pocet_strednidelnik)+(pocet_nejdelnik*cena_nejdelnik);
    vyroba = prijmy - odecty;
    //Skloňování a zkrácení zápisu výdělků za sekundu
    if (vyroba == 1) sklonovani_vyroba = "coin";
    if ((vyroba >= 2)&&(vyroba < 5)) sklonovani_vyroba = "coiny";
    if ((vyroba >= 5)||(vyroba == 0)) sklonovani_vyroba = "coinů";
    if (vyroba >= 1000){
        document.getElementById("vyroba").innerHTML = Math.round(vyroba/100)/10 + "k" + " " + sklonovani_vyroba + "/s";
    }
    if (vyroba >= 1000000){
        document.getElementById("vyroba").innerHTML = Math.round(vyroba/100000)/10 + "mil" + " " + sklonovani_vyroba + "/s";
    }
    if (vyroba >= 1000000000){
        document.getElementById("vyroba").innerHTML = Math.round(vyroba/100000000)/10 + "mld" + " " + sklonovani_vyroba + "/s";
    }
    document.getElementById("vyroba").innerHTML = vyroba + " " + sklonovani_vyroba + "/s";
    //Skloňování a zkrácení zápisu počtu coinů
    if (coiny == 1) sklonovani = " coin";
    if ((coiny >= 2)&&(coiny < 5)) sklonovani = " coiny";
    if ((coiny >= 5)||(coiny==0)) sklonovani = " coinů";
    document.getElementById("sklonovani_coiny").innerHTML = sklonovani;
    if (coiny >= 1000){
        document.getElementById("coiny").innerHTML = Math.round(coiny/100)/10 + "k";
    }
    if (coiny >= 1000000) {
        document.getElementById("coiny").innerHTML = Math.round(coiny/100000)/10 + "mil";
    }
    if (coiny >= 1000000000){ 
        document.getElementById("coiny").innerHTML = Math.round(coiny/100000000)/10 + "mld";
    }
}
//aktualizace okna
window.setInterval(function() {
    aktualizovatprijem();
    zmena_okna();
}, 1);
//nastavuje interval pro každý výdělek
var intervalvydelek = 1000;
window.setInterval(function() {
    prohra();
    vyhra();
    postup_pridat();
}, 1000);
window.setInterval(function() {
    dostat_prijem();
}, intervalvydelek);
//nastavuje interval pro zlenivění Ludvíčka
window.setInterval(function() {
    lenost();
}, cas_lenost);
//nastavuje interval 3 sekundy pro cenu bitcoinu
window.setInterval(function() {
    btc_zmena();
}, 3000);
//Prohra
function prohra(){
    if (coiny <= -10000){
        ok_penize(); 
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
        ok_penize(); 
        druhylevel();
        return;
    }
}
//přeskakování levelu pomocí zadání kódu levelu
function skiplevel(){
    var kod = document.getElementById("levelcode").value;
    if (kod=="ONE"){window.location.href="game.html";};
    if (kod=="HRESK"){druhylevel();};

    //Cheaty, o tom bych se radši nebavil
    if (kod=="HEHE1000JO"){coiny+=1000;}
    if (kod=="UZPOTREBUJUMAKAT"){pocet_prijem_100k+=1;}
    if (kod=="CJCWC"){
        ok_penize();
        document.getElementById("epic_cheat").style.visibility = "visible";
        pocet_prijem_2mil += 100;
    }
}
//smaže text po kliknutí na input se zadáním kódu levelu
function smazattext(){
    document.getElementById("levelcode").value = "";
}
//změna na druhý level

function druhylevel(){
    //přesměrování na web s druhým levelem
    window.location.href="level2.html";
}
