/* class phone{
    brand = "Samsung";
    color = "Red";
    price = 123.21;
    usbC = false;
    user="Marcin";
    sendSms =function (text)
    {
        this.sms = this.user + "Wysłał sms: " + text;
    }
}
let komora=new phone();
const Tekst=prompt("Podaj tekst SMS");
komora.sendSms(Tekst);
document.write(komora.sms);
komora.brand
*/
/*class phone{
    brand = "Samsung";
    color = "Red";
    price = 123.21;
    usbC = false;
    user="Marcin ";

}
let komora=new phone;
let telefon=new phone;
telefon.user="Tomek";
let telefony=new array(20);
telefony[0]=new phone;
telefony[0].user="Bob";
alert(telefony[0].user);*/

class warzywo{
    name = "noname";
    price = 0;
    amount = 0;

}
let warzywa=new Array(3);
for (let i=0;i<3;i++)
{
    warzywa[i]=new warzywo;
    warzywa[i].name=prompt("Podaj warzywo");
    warzywa[i].price=prompt("Podaj cene");
    warzywa[i].amount=prompt("Podaj ilość");
}
let odp=prompt("Interesuje cię cena ilośc czy ogólna lista warzyw dostępnych?");
if (odp=="cena")
{
    let prc = prompt("Ile maksymalnie mozesz zapłacic?");
    for (let i=0;i<3;i++)
    {
        if (odp == "cena" && prc >= 10)
        {
            document.write(warzywa[i].name);
            document.write(warzywa[i].price);
            document.write(warzywa[i].amount);
        }
    }
}
if (odp=="ilosc")
{
    let am = prompt("Jaka ilosc cie interesuje?");
    for (let i=0;i<3;i++)
    {
        if (odp == "ilosc" && am <= 100)
        {
            document.write(warzywa[i].name);
            document.write(warzywa[i].price);
            document.write(warzywa[i].amount);
        }

    }
}
if (odp=="lista")
{
    alert("Wyświetlam listę naszych produktów z cenami i ilością na magazynie");
    for (let i=0;i<3;i++)
    {
        document.write(warzywa[i].name+"<br>");
        document.write(warzywa[i].price+"<br>");
        document.write(warzywa[i].amount+"<br>");

    }
}


