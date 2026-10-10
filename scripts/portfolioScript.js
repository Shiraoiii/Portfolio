/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "12em";
  document.getElementById("main").style.marginLeft = "12em";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

/*Partie qui sert à récupérer les informations du profile codewars*/
async function loadCodewars() {
  const request = await fetch("https://www.codewars.com/api/v1/users/Vaeaaa");
  const dataCodewars = await request.json();

    /* Partie modification dès le lancement de la page pour afficher les datas */
    const pythonScore = document.getElementById("pythonScore");
    const pythonRank = document.getElementById("pythonRank");
    async function htmlApply() {
      pythonScore.textContent = ""+dataCodewars.ranks.languages.python.score;
      pythonRank.textContent = ""+dataCodewars.ranks.languages.python.name;
    }
  htmlApply();
}
loadCodewars();

