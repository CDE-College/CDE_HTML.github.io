// partie 2 : méthode pour "get" les valeurs des ID "name" et "level" et produire du texte sur l'ID "divJava" après opération
function hTitle()
{
	var name = document.getElementById("name").value;
	var level = parseInt(document.getElementById("level").value);


	if(isNaN(level) || level < 1 || level > 6)
	{
		document.getElementById("divJava").innerHTML = "<p>Error, level must be between 1 and 6</p>";
		document.getElementById("divJava").className = "badAnswer";
	}
	else
	{
		document.getElementById("divJava").innerHTML ="<h"+level+">"+"Hello "+name+" level = "+level+"</h"+level+">";
		document.getElementById("divJava").className ="goodAnswer";
	}
}
// Partie 3 : Quatre(4) méthodes pour "get" la valeur de l'ID "inpoot" et produire du texte sur l'ID "resultat" après opération
function InToCm()
{
	var inpoot = parseFloat(document.getElementById("inpoot").value);
	const InCm = 2.5 * inpoot;

	document.getElementById("results").innerHTML = " inches ==&gt; "+InCm+" cm";
}
function CmToIn()
{
	var inpoot = parseFloat(document.getElementById("inpoot").value);
	const CmIn = 1 / 2.5 * inpoot;

	document.getElementById("results").innerHTML = " cm ==&gt; "+CmIn+" inches";
}
function CelToFar()
{
	var inpoot = parseFloat(document.getElementById("inpoot").value);
	const CelFar = inpoot * 9/5 + 32;
	var CelFarFixed = CelFar.toFixed(1);

	document.getElementById("results").innerHTML = " celsius ==&gt; "+CelFarFixed+" faranheit";
}
function FarToCel()
{
	var inpoot = parseFloat(document.getElementById("inpoot").value);
	const FarCel = (inpoot - 32) * 5/9;
	var FarCelFixed = FarCel.toFixed(1);

	document.getElementById("results").innerHTML = " faranheit ==&gt; "+FarCelFixed+" celsius";
}
