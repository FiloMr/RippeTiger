const owoc=["banan","jablko","cytryna","kiwi"];
const cena=["3zl","4zl","5zl","6zl"]
const aowoc=prompt("Jakiego owocu szukasz?");


for (let i=0;i<owoc.length;i++)
{
    if (aowoc == owoc[i])
    {
        alert(owoc[i] + " Kosztuje "+ cena[i]);
    }

}
if (aowoc != "banan" && aowoc != "jablko" && aowoc != "cytryna" && aowoc != "kiwi")
{
    alert("Nie mamy takiego owocu");
}



