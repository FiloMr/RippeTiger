let clothes = new Set(); //New ponieważ powstaje nowy obiekt klasy Set (Konstruktor New)
let domek = "chałupka";

clothes.add('sweter');
clothes.add('kalesony');

alert(clothes.has('sweter'));

 // clothes.delete('kalesony');

// alert(clothes.has('kalesony'));

clothes.add('sweter'); // To nic nie robi bo ten element juz istnieje

alert(clothes.size);

for (let item of clothes)
{
    alert(item);
}
