class pizza{
    chesse = 0;
    bacon = 0;
    onion = 0;
    regular_price = 10;
    price = function () {
        return this.chesse * 5 + this.bacon * 10 + this.onion * 3 + this.regular_price;
    }
    calrories = function () {
        return this.chesse *400 + this.bacon * 540 + this.onion * 40 + 280;
    }
    vege = function () {
        if (this.bacon==0)
        {
            console.log("Pizza jest wegetariańska");
        }
        else console.log("Pizza zawiera mięsko");

    }
    display = function () {
        console.log(`Cena pizzy to ` + this.price());
        console.log(`Średnia kaloryczność to ok ` + this.calrories());
        console.log(this.vege());
    }
}

let new_pizza= new pizza();
new_pizza.chesse=prompt("Wybierz zawartość sera w pizzy od 1=100g do 0.1=10g lub 0 jeśli bez tego składnika");
new_pizza.bacon=prompt("Wybierz zawartość bekonu w pizzy od 1=100g do 0.1=10g lub 0 jeśli bez tego składnika");
new_pizza.onion=prompt("Wybierz zawartość cebuli w pizzy od 1=100g do 0.1=10g lub 0 jeśli bez tego składnika" +
    "");

new_pizza.display();


