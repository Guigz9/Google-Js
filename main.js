var content = document.getElementById("content"); // Création de la variable content pour récuperer nos élements centraux appelés "content" dans le html
content.style.visibility = "hidden"; // On cache la variable csi dessus (boutons centraux)

function hideBeforeClick() // Fonction pour cacher les boutons avant le clic
{
	var divButtonShow = document.getElementById ("divButtonShow"); // Création de la variable "divbuttonshow" de la <divbuttonshow> dans le html

	divButtonShow.parentNode.removeChild(divButtonShow); // Des qu'on va cliquer sur le bouton, il disparaitra
	content.style.visibility = "visible"; // On rend alors le content (les boutons centraux) visibles
}

function googleSearch() // On crée la fonction recherche google
{
	var search = document.getElementById("inputSearch"); // On recupère notre zone de recherche google du html
	search.value = search.value.replace(/ /g, "+"); // Remplacer les espaces / / par le signe + pour la recherche google
	var  searchGoogle = "https://www.google.fr/#q=" + search.value; // On ajoute une variable permettant de passer par la recherche google
	window.open(searchGoogle, "_self"); // Commande pour ouvrir la page + le "_self" pour l'ouvrir dans le meme onglet
}

setTimeout(function() //Fonction qui met le pop-up
{
	window.alert("Hey le site xxxvidsxxx/ALDAIR&SA_MERE+BUKKAKE est trop bien. Viens dessus stp please"); //Fait apparaitre une fenetre
},10000)