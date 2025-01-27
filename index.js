let randomnumber = Math.floor((Math.random() * 6) + 1);
///alert(randomnumber);

var randoming = "dice" + randomnumber + ".png";

var randomimgsource = "images/" + randoming;

document.querySelector(".img1").setAttribute("src",randomimgsource);



let randomnumber2 = Math.floor((Math.random() * 6) + 1);
///alert(randomnumber);

var randoming2 = "dice" + randomnumber2 + ".png";

var randomimgsource2 = "images/" + randoming2;

document.querySelector(".img2").setAttribute("src",randomimgsource2);

if(randomnumber>randomnumber2)
{
    document.querySelector("h1").innerHTML="Player 1 wins"
}

else if(randomnumber2>randomnumber)
    {
        document.querySelector("h1").innerHTML="Player 2 wins"
    }
else if(randomnumber==randomnumber2)
{
    document.querySelector("h1").innerHTML="tie up"
}