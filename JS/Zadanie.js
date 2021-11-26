class city{
    name = "noname";
    people = 0;
    geo_place="0";
    pow=0;

}
let lublin=new city;
lublin.name="Lublin";
lublin.people=338586;
lublin.geo_place="22° 34´ 13´´ 51° 14´ 53´´";
lublin.pow=147;

document.write("INFORMACJE O LUBLINIE" + "<br>");
document.write("Liczba mieszkańców to: "+ lublin.people + "<br>");
document.write("Wspolzendne" + lublin.geo_place + "<br>");
document.write("Powieszchcnia to : "+ lublin.pow + "Kilometrów Kwadratowych" +"<br>");

