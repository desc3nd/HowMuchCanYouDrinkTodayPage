//zmienna przechowująca nazwe obrazka przycisku
let buttonName = "";
//zmienna przechowująca ilość wypitego alko
let drinkCounter = 0;
//zmienna przechowująca wartość czy zaczeliśmy rozgrywke czy nie 
let isStarted = false;
//zmienna przechowująca Intervały timera
let clickedTimer;
//funccja zmieniająca pozycje drinka na kliknięcie
function ChangePositionOfDrink(nameOfButton) {
    //sprawdzam czy rozrywka zaczęta 
    if (isStarted == true) {
        //zwiększam  ilość wypitych drinków
        drinkCounter++;
        //przypisuje wartość buttona
        buttonName = nameOfButton;
        //zmienna przechowująca nową pozycje buttona
        let position = Math.random() * 85;
        //zmienna przechowująca nowy size buttona 
        let size = Math.floor(Math.random() * 50 + 3);
        //zmieniam wygląda buttona i jego pozycje
        document.getElementById(buttonName).style.position = "fixed";
        document.getElementById(buttonName).style.width = "auto";
        document.getElementById(buttonName).style.left = position + "%";
        position = Math.random() * 85;
        document.getElementById(buttonName).style.top = position + "%";
        document.getElementById(buttonName).style.height = size + "%";
        //zmieniam napis hedera na licznik
        document.getElementById("head").innerHTML = drinkCounter;
        //czyszcze ewentualne intervały
        clearInterval(clickedTimer);
        //nadaje nowe intervały
        clickedTimer = setInterval(ChangeIntervalPositionOfDrink, 1000);
   
    }
}
//funkcja rozpoczynająca gre
function StartGame(nameOfButton) {
    //zmieniam parametry buttona i rozpoczynam gre
    isStarted = true;
    document.getElementById(nameOfButton).style.position = "fixed";
    document.getElementById(nameOfButton).style.width = "auto";
    document.getElementById(nameOfButton).style.visibility = "visible";
    buttonDissapp(nameOfButton);
    //zmienna orzechowująca losowy czas gry
    let randomTime = Math.floor(Math.random() * 3000 + 5000);
    //ustawiam timer gry po nim nastepuje odwołanie do funkcji wyswietlającej wynik
    setTimeout(alertAboutOutcome, randomTime);
    document.getElementById("head").innerHTML = drinkCounter;
  
}
//funkcja wywołująca alert o  wyniku i zmieniająca wygląd strony po grze
function alertAboutOutcome() {
    //sprawdzam wynik i stosownie wyświetlam
    CheckOutcome();
    //zmieniam ustawienia strony po grze
    ChangePageAfterGame(buttonName);
 
}
//funkcja wyłączająca 2 buttony w czasie gry
function buttonDissapp() {
    document.getElementById("start").style.visibility = "collapse";
    document.getElementById("back").style.visibility = "collapse";
}
//funckja zmieniająca strone po grze do ukladu startowego
function ChangePageAfterGame(nameOfButton) {
    document.getElementById("start").style.position = "static";
    document.getElementById("back").style.position = "static";
    document.getElementById(nameOfButton).style.position = "static";
    document.getElementById("start").style.visibility = "visible";
    document.getElementById("back").style.visibility = "visible";
    drinkCounter = 0;
    document.getElementById("head").innerHTML = "Kliknij start a następnie klikaj obrazek by wlać w siebie więcej alkoholu.";
    isStarted = false;
}
//funckja zmienijąca pozycje buttona po określonym czasie
function ChangeIntervalPositionOfDrink() {
    if (isStarted == true) {
        let position = Math.random() * 85;
        let size = Math.floor(Math.random() * 50 + 3);
        document.getElementById(buttonName).style.left = position + "%";
        position = Math.random() * 85;
        document.getElementById(buttonName).style.top = position + "%";
        document.getElementById(buttonName).style.height = size + "%";
        document.getElementById("head").innerHTML = drinkCounter;
    }
}
//funkcja sprawdzajaca, korygująca i wyświetlająca wynik 
function CheckOutcome() {
    if (drinkCounter < 4) {
        drinkCounter = Math.floor(Math.random() * 10 + 4);
        alert("UPSSS. Coś mało tego. Dostajesz bonusy bo wierze, że stać cie by wypić więcej. Zatem wypijesz dzis:  " + drinkCounter);
    }
    else {
        alert("Wypijesz dzisiaj: " + drinkCounter);
    }
}
